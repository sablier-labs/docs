import React from "react";
import Link from "@docusaurus/Link";
import styled from "@emotion/styled";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import type UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";

const WrapperPartial = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-column: span 1;
  row-gap: calc(var(--sablier-size-edge) * 1);
  width: 100%;
  padding: calc(var(--sablier-size-edge) * 3 / 2);
  border: 2px solid var(--sablier-color-borderLanding);
  border-radius: 6px;
  background-color: var(--sablier-color-dark200-50);
  backdrop-filter: blur(10px);
  cursor: pointer;

  @media all and (max-width: 400px) {
    padding: calc(var(--sablier-size-edge) * 1 / 2);
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  margin-bottom: calc(var(--sablier-size-edge) * 1);
  color: var(--sablier-color-white);
  border-radius: 6px;
  background-color: rgba(26, 29, 40, 0.05);
  overflow: hidden;

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.6;
    color: var(--sablier-color-white);

    &:last-child {
      display: none;
    }
  }

  &:before {
    position: absolute;
    content: "";
    z-index: 10;
    width: 52px;
    height: 52px;
    margin-top: -70px;
    margin-right: -70px;
    background: rgb(84, 92, 130);
    filter: blur(20px);
  }
  & > * {
    z-index: 20;
  }

  @media all and (max-width: 400px) {
    width: 48px;
    height: 48px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const Title = styled.div`
  & > h3 {
    font-weight: 600;
    line-height: 140%;
    margin: 0;
    color: var(--sablier-color-white);
  }
`;

const Description = styled.div`
  & > p {
    font-weight: 500;
    font-size: 12pt;
    line-height: 160%;
    margin: 0;
    color: var(--sablier-color-gray200);
  }
`;

const Wrapper = styled(WrapperPartial)`
  &:hover,
  &:active {
    background-color: var(--sablier-color-dark200);
    border: 2px solid var(--sablier-color-dark400);
    text-decoration: none;

    & > div:first-child {
      svg {
        &:first-child {
          display: none;
        }
        &:last-child {
          display: block;
        }
      }
    }
  }
`;

export interface Props {
  description: string;
  Icon: typeof UserCircleIcon;
  title: string;
  to: string;
}

function Feature({ description, Icon, title, to }: Props) {
  return (
    <Wrapper to={to}>
      <Box>
        <Icon />
        <ArrowRightIcon />
      </Box>
      <Title>
        <h3>{title}</h3>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
    </Wrapper>
  );
}

export default Feature;
