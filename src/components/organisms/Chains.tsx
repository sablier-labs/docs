import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  kind: "mainnets" | "testnets";
}

export function Chains({ kind }: ChainProps) {
  const content = useMemo(() => {
    let content: string = "";
    content += `| Name | Chain ID | In UI? | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----- | :----------- | :------- |\n`;

    const getter = kind === "mainnets" ? sablier.chains.getMainnets : sablier.chains.getTestnets;
    for (const chain of getter()) {
      const supportedCell = chain.isSupportedByUI ? "✅" : "❌";
      const symbolCell = chain.nativeCurrency.symbol;
      const explorerURL = chain.blockExplorers.default.url;
      const explorerCell = `[${new URL(explorerURL).host}](${explorerURL})`;
      content += `| ${chain.name} | ${chain.id} | ${supportedCell} | ${symbolCell} | ${explorerCell} |\n`;
    }
    return content;
  }, [kind]);

  return <GFMContent content={content} />;
}

export default Chains;
