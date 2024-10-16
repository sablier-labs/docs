import fs from "fs/promises";

async function formatGasBenchmark(filePath) {
  const markdownContent = await fs.readFile(filePath, "utf8");
  const formattedContent = markdownContent.replace(/\b\d+\b/g, (match) => {
    return parseInt(match).toLocaleString("en-US");
  });
  await fs.writeFile(filePath, formattedContent);
}

formatGasBenchmark("docs/guides/lockup/03-gas-benchmarks.md");
// formatGasBenchmark('docs/guides/flow/03-gas-benchmarks.md'); // TODO enable once flow benchmarks are added
