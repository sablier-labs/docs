import { useMemo } from "react";
import { chains } from "@sablier/deployments";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  type: "mainnets" | "testnets";
}

export default function Chains({ type }: ChainProps) {
  const content = useMemo(() => {
    let content: string = "";
    content += `| Name | Chain ID | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----------- | :------- |\n`;

    for (const chain of chains[type]) {
      content += `| ${chain.name} | ${chain.id} | ${chain.nativeToken.symbol} | [Explorer](${chain.explorerURL}) |\n`;
    }
    return content;
  }, [type]);

  return <GFMContent content={content} />;
}
