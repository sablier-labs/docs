import fs from 'fs/promises';

async function formatGasBenchmark() {
  const filePath = 'docs/contracts/v2/05-gas-benchmarks.md';
  const markdownContent = await fs.readFile(filePath, 'utf8');
  const formattedContent = markdownContent.replace(/\b\d+\b/g, (match) => {
    return parseInt(match).toLocaleString('en-US');
  });
  await fs.writeFile(filePath, formattedContent);
}

formatGasBenchmark();
