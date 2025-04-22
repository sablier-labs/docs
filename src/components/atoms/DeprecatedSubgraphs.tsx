import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";

interface DeprecatedSubgraphsProps {
  protocol?: string;
}

export default function DeprecatedSubgraphs({ protocol }: DeprecatedSubgraphsProps) {
  if (!protocol) {
    return null;
  }

  return (
    <Admonition type="warning">
      In February 2025, we deprecated the `sablier-v2-*` subgraphs endpoints. They will remain available, but they will
      not track the latest versions of the Sablier Protocol. If you need to use the deprecated endpoints, head over to
      the <Link href={`/api/${protocol}/previous-endpoints`}>Previous Endpoints</Link> section.
    </Admonition>
  );
}
