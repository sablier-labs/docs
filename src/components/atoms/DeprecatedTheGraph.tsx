import Link from "@docusaurus/Link";
import type { Sablier } from "@sablier/deployments";
import Admonition from "@theme/Admonition";

interface DeprecatedTheGraphProps {
  protocol: Sablier.Protocol;
}

export default function DeprecatedTheGraph({ protocol }: DeprecatedTheGraphProps) {
  return (
    <Admonition type="warning">
      In February 2025, we deprecated the `sablier-v2-*` line-up of subgraphs. They will remain available, but they will
      not track the latest versions of the Sablier Protocol. If you need to use the deprecated endpoints, head over to
      the <Link href={`/api/${protocol}/previous-endpoints`}>Previous Endpoints</Link> section.
    </Admonition>
  );
}
