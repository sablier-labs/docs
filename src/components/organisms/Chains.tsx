import { useMemo } from "react";
import _ from "lodash";
import { mainnets, testnets } from "sablier";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  kind: "mainnets" | "testnets";
}

export function Chains({ kind }: ChainProps) {
  const content = useMemo(() => {
    let content: string = "";
    content += `| Name | Chain ID | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----------- | :------- |\n`;

    const chains = kind === "mainnets" ? mainnets : testnets;
    for (const chain of _.values(chains)) {
      content += `| ${chain.name} | ${chain.id} | ${chain.nativeToken.symbol} | [Explorer](${chain.explorerURL}) |\n`;
    }
    return content;
  }, [kind]);

  return <GFMContent content={content} />;
}

export default Chains;
