import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/airdrops/merkle-api/sablier-merkle-api",
    },
    {
      type: "category",
      label: "Campaign",
      link: {
        type: "doc",
        id: "api/airdrops/merkle-api/campaign",
      },
      items: [
        {
          type: "doc",
          id: "api/airdrops/merkle-api/create-campaign",
          label: "Create a new Merkle airdrop campaign",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Verification",
      link: {
        type: "doc",
        id: "api/airdrops/merkle-api/verification",
      },
      items: [
        {
          type: "doc",
          id: "api/airdrops/merkle-api/check-eligibility",
          label: "Check recipient eligibility",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/airdrops/merkle-api/validate-campaign",
          label: "Validate campaign IPFS CID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
