import { evaluateSync } from "@mdx-js/mdx";
import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

type GFMContentProps = {
  content: string;
};

/**
 * Renders GitHub-Flavored Markdown content using MDX.
 */
export default function GFMContent({ content }: GFMContentProps) {
  const { default: Content } = useMemo(() => {
    return evaluateSync(content, {
      ...runtime,
      rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
      remarkPlugins: [remarkGfm],
    });
  }, [content]);

  return <Content />;
}
