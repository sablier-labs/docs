import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { sablier } from "sablier";
import type { Chain as ViemChain } from "viem";
import { createPublicClient, http } from "viem";
import GFMContent from "../atoms/GFMContent";

interface AdminData {
  adminAddress: string;
  chainId: number;
  chainName: string;
  explorerUrl?: string;
}

export function AdminsTable() {
  const [admins, setAdmins] = useState<AdminData[]>([]);
  const [loading, setLoading] = useState(true);

  const mainnets = useMemo(() => {
    return sablier.chains.getMainnets().filter((c) => c.isSupportedByUI);
  }, []);

  useEffect(() => {
    async function fetchAdmins() {
      const adminPromises = mainnets.map(async (chain): Promise<AdminData | undefined> => {
        try {
          const contracts = sablier.contracts.getAll({ chainId: chain.id, protocol: "lockup" });
          if (_.isEmpty(contracts)) {
            console.warn(`No SablierLockup contract found for ${chain.name}`);
            return undefined;
          }
          const lockupContract = contracts
            .filter((c) => c.name === "SablierLockup" || c.name === "SablierV2LockupLinear")
            .sort((a, b) => b.version.localeCompare(a.version))[0]; // Get latest version

          if (!lockupContract) {
            console.warn(`No SablierLockup contract found for ${chain.name}`);
            return undefined;
          }

          // Create viem client for this chain
          const client = createPublicClient({
            chain: chain as ViemChain,
            transport: http(chain.rpc.defaults[0]),
          });

          // Define the ABI with proper const assertion
          const adminAbi = [
            {
              inputs: [],
              name: "admin",
              outputs: [{ name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
          ] as const;

          // Call the admin() function on the contract
          const adminAddress = await client.readContract({
            abi: adminAbi,
            address: lockupContract.address as `0x${string}`,
            authorizationList: undefined,
            functionName: "admin",
          });

          return {
            adminAddress: adminAddress as string,
            chainId: chain.id,
            chainName: chain.name,
            explorerUrl: lockupContract.explorerURL ?? chain.blockExplorers.default.url,
          };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          console.warn(`Failed to fetch admin for ${chain.name}:`, errorMessage);
        }
      });

      const results = (await Promise.all(adminPromises)).filter(Boolean);

      // Sort by chain name for consistent ordering
      results.sort((a, b) => a.chainName.localeCompare(b.chainName));

      setAdmins(results);
      setLoading(false);
    }

    void fetchAdmins();
  }, [mainnets]);

  const content = useMemo(() => {
    if (loading) {
      return "| Chain | Address |\n| :---- | :------ |\n| Loading... | Loading... |";
    }

    let content = "| Chain | Address |\n";
    content += "| :---- | :------ |\n";

    for (const admin of admins) {
      const explorerBaseUrl = admin.explorerUrl?.replace(/\/address\/.*$/, "") || "";
      const addressLink = `[${admin.adminAddress}](${explorerBaseUrl}/address/${admin.adminAddress})`;
      content += `| ${admin.chainName} | ${addressLink} |\n`;
    }

    return content;
  }, [admins, loading]);

  return <GFMContent content={content} />;
}

export default AdminsTable;
