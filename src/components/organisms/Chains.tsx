import { useMemo } from "react";
import { mainnets, testnets } from "@sablier/deployments";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  type: "mainnets" | "testnets";
}

export function Chains({ type }: ChainProps) {
  const content = useMemo(() => {
    let content: string = "";
    content += `| Name | Chain ID | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----------- | :------- |\n`;

    const chains = type === "mainnets" ? mainnets : testnets;
    for (const chain of chains) {
      content += `| ${chain.name} | ${chain.id} | ${chain.nativeToken.symbol} | [Explorer](${chain.explorerURL}) |\n`;
    }
    return content;
  }, [type]);

  return <GFMContent content={content} />;
}

export function totalChains(type: "mainnets" | "testnets"): number {
  const chains = type === "mainnets" ? mainnets : testnets;
  return chains.length;
}

export default Chains;
