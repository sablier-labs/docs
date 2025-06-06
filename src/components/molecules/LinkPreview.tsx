import { useCallback } from "react";
import styled from "@emotion/styled";
import Link from "@docusaurus/Link";
import SablierIcon from "@site/static/img/logo.svg";
import GitHubIcon from "@site/static/img/social/github.svg";

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

const StyledGitHubIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

interface LinkPreviewProps {
  href: string;
  icon: string;
  subtitle: string;
  title: string;
}

export default function LinkPreview(props: LinkPreviewProps) {
  const renderIcon = useCallback(() => {
    switch (props.icon) {
      case "github":
        return (
          <StyledGitHubIcon>
            <GitHubIcon height={28} width={28} />
          </StyledGitHubIcon>
        );
      default:
        return <SablierIcon height={28} width={28} />;
    }
  }, [props.icon]);

  return (
    <Wrapper href={props.href}>
      <IconWrapper>{renderIcon()}</IconWrapper>
      <LabelWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </LabelWrapper>
    </Wrapper>
  );
}
