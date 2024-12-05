import fs from "fs/promises";

async function formatGasBenchmark(filePath) {
  const markdownContent = await fs.readFile(filePath, "utf8");
  const formattedContent = markdownContent.replace(/(?<!\d,)\b\d{4,}\b(?!,\d{3})/g, (match) => {
    return parseInt(match).toLocaleString("en-US");
  });
  await fs.writeFile(filePath, formattedContent);
}

formatGasBenchmark("docs/guides/lockup/04-gas-benchmarks.md");
formatGasBenchmark("docs/guides/flow/04-gas-benchmarks.md");
