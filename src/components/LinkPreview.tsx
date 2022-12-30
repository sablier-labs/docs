import Link from "@docusaurus/Link";
import styled from "@emotion/styled";
import React from "react";

import GitHubIcon from "../icons/GitHubIcon";

const Wrapper = styled(Link)`
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  margin: 1.25rem auto;
  padding: 1rem 1.25rem;
  width: 100%;

  &:active,
  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: 2rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 1rem;
  min-width: 0;
`;

const Title = styled.span`
  color: var(--ifm-font-color-base);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
`;

const Subtitle = styled.span`
  color: var(--ifm-color-emphasis-600);
  text-transform: none;
`;

interface LinkPreviewProps {
  href: string;
  icon: "github";
  subtitle: string;
  title: string;
}

export default function LinkPreview(props: LinkPreviewProps): JSX.Element {
  return (
    <Wrapper href={props.href}>
      <IconWrapper>{props.icon == "github" ? <GitHubIcon size={32} /> : null}</IconWrapper>
      <LabelWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </LabelWrapper>
    </Wrapper>
  );
}
