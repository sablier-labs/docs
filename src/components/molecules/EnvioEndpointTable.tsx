import Link from "@docusaurus/Link";

type EnvioEndpointTableProps = {
  protocolId: string;
};

export default function EnvioEndpointTable({ protocolId }: EnvioEndpointTableProps) {
  // Generate the Envio endpoint URL
  const endpoint = `https://indexer.hyperindex.xyz/${protocolId}/v1/graphql`;

  // Construct the testing URL
  const testingUrl = `https://cloud.hasura.io/public/graphiql?endpoint=https%3A%2F%2Findexer.hyperindex.xyz%2F${protocolId}%2Fv1%2Fgraphql`;

  return (
    <table>
      <thead>
        <tr>
          <th>Chain</th>
          <th>Endpoint</th>
          <th>Testing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>All Chains</td>
          <td>
            <Link to={endpoint}>{endpoint}</Link>
          </td>
          <td>
            <Link to={testingUrl}>Hasura GraphiQL</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
