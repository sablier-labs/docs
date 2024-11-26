import React from "react";
import styled from "@emotion/styled";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { links } from "../../constants";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline: calc(var(--sablier-size-edge) * 1);
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--sablier-size-edge);
  max-width: var(--sablier-size-content);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Social = styled(Link)`
  grid-column: span 1;
  align-items: flex-start;
  border: 2px solid var(--sablier-color-border);
  border-radius: 6px;
  color: var(--sablier-color-white);
  display: grid;
  flex-direction: row;
  grid-template-columns: 3rem 1fr;
  justify-content: space-between;
  gap: calc(var(--sablier-size-edge) * 1);
  padding: calc(var(--sablier-size-edge) * 3 / 2);

  h4 {
    margin-bottom: calc(var(--sablier-size-edge) * 1 / 2);
    font-size: 12pt;
  }

  p {
    margin: 0;
    color: var(--sablier-color-gray200);
    line-height: 150%;
  }

  div > svg {
    height: 40px;
    width: 40px;
  }

  svg,
  img {
    filter: invert(50%);
  }

  &:active,
  &:hover {
    border: 2px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    color: var(--ifm-font-color-base);
    text-decoration: none;
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media all and (max-width: 400px) {
    flex-direction: column;
    display: flex;
  }
`;

function Socials() {
  return (
    <Wrapper>
      <List>
        <Social href={links.discord}>
          <img src="img/social/discord.svg" style={{ width: "48px", height: "48px" }} />
          <div>
            <Heading as="h4">Discord</Heading>
            <p>Hop in to the #dev channel to get help.</p>
          </div>
        </Social>

        <Social href={links.github}>
          <img src="img/social/github.svg" style={{ width: "44px", height: "44px" }} />
          <div>
            <Heading as="h4">GitHub</Heading>
            <p>View all Sablier code repositories.</p>
          </div>
        </Social>

        <Social href={links.blog}>
          <div>
            <img src="img/logo.svg" style={{ width: "48px", height: "48px" }} />
          </div>
          <div>
            <Heading as="h4">Blog</Heading>
            <p>Follow the announcements on our blog.</p>
          </div>
        </Social>
      </List>
    </Wrapper>
  );
}

export default Socials;
