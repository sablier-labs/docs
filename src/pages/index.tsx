import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styled from "@emotion/styled";
import Layout from "@theme/Layout";
import React from "react";
import HomepageHeader from "../components/HomepageHeader";
import { links } from "../constants";
import GitHubIcon from "../icons/GitHubIcon";
import MediumIcon from "../icons/MediumIcon";

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem;
  width: 100%;
`;

const BodyWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  margin: 0rem auto;
  max-width: 960px;
  padding: 1rem 0rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    max-width: 100%;
    margin: 0rem 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FlexGrowDiv = styled.div`
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  align-items: center;
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 1.5rem;
  color: var(--ifm-font-color-base);
  display: grid;
  flex-direction: row;
  grid-template-columns: 3rem 1fr;
  justify-content: space-between;
  gap: 1.5rem;
  max-height: 250px;
  min-width: 250px;
  padding: 1rem;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0rem;
  }

  &:active,
  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    color: var(--ifm-font-color-base);
    text-decoration: none;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const StyledGitHubIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

const StyledMediumIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description="Documentation and guides for Sablier" title={siteConfig.title}>
      <OuterWrapper>
        <HomepageHeader />
        <FlexGrowDiv />
        <BodyWrapper>
          <StyledLink href={links.discord}>
            <img src="img/social/discord.svg" style={{ width: "48px", height: "48px" }} />
            <div>
              <h3>Discord</h3>
              <p>Hop in to the #dev channel to get help.</p>
            </div>
          </StyledLink>

          <StyledLink href={links.github}>
            <StyledGitHubIcon>
              <GitHubIcon size={48} />{" "}
            </StyledGitHubIcon>
            <div>
              <h3>GitHub</h3>
              <p>View all Sablier code repositories.</p>
            </div>
          </StyledLink>

          <StyledLink href={links.medium}>
            <StyledMediumIcon>
              <MediumIcon size={48} />{" "}
            </StyledMediumIcon>
            <div>
              <h3>Medium</h3>
              <p>Follow our announcements on our blog.</p>
            </div>
          </StyledLink>
        </BodyWrapper>
        <FlexGrowDiv />
      </OuterWrapper>
    </Layout>
  );
}
