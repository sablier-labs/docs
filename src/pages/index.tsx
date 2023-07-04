import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styled from "@emotion/styled";
import Layout from "@theme/Layout";
import Header from "../components/organisms/Header";
import Socials from "../components/organisms/Socials";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  background: var(--sablier-color-background);
  padding-bottom: calc(var(--sablier-size-edge) * 4);
`;

const Divider = styled.div`
  margin: calc(var(--sablier-size-edge) * 4) 0;
  height: 2px;
  width: 100%;
  background-color: var(--sablier-color-border);

  &:last-child {
    margin-bottom: 0;
  }

  @media all and (max-width: 400px) {
    margin: calc(var(--sablier-size-edge) * 2) 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description="Documentation and guides for Sablier" title={siteConfig.title}>
      <Wrapper>
        <Header />
        <Divider />
        <Socials />
      </Wrapper>
    </Layout>
  );
}
