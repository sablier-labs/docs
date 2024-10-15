import React from "react";
import styled from "@emotion/styled";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";
import CubeIcon from "@heroicons/react/24/outline/CubeIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import Heading from "@theme/Heading";
import Feature from "../molecules/Feature";
import Underlay from "./Header/Underlay";

const Wrapper = styled.header`
  width: 100%;
  position: relative;
  min-height: 640px;
  margin-top: -40px;
  padding-block: 80px;
  padding-inline: calc(var(--sablier-size-edge) * 1);

  @media all and (max-width: 400px) {
    padding-bottom: 0px;
  }
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 20;
  position: relative;

  @media all and (max-width: 400px) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  margin-top: calc(var(--sablier-size-edge) * 2);
  & > h1 {
    max-width: 500px;
    color: var(--sablier-color-white);
    font-weight: 700;
    font-size: 52pt;
    line-height: 140%;
    text-align: center;
    margin: 0;
    @media all and (max-width: 400px) {
      font-size: 22pt;
      text-align: left;
    }
  }
`;

const Subtitle = styled.div`
  max-width: 500px;
  margin-top: calc(var(--sablier-size-edge) * 2);
  margin-bottom: calc(var(--sablier-size-edge) * 1);

  & > p {
    font-weight: 500;
    font-size: 16pt;
    line-height: 150%;
    margin: 0;
    color: var(--sablier-color-gray400);
    text-align: center;
    @media all and (max-width: 400px) {
      text-align: left;
    }
  }
`;

const Collection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--sablier-size-edge) * 1);
  width: 100%;
  padding-top: calc(var(--sablier-size-edge) * 4);
  max-width: var(--sablier-size-content);

  @media all and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: auto;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Underlay />
      <Content>
        <Title>
          <Heading as="h1">Sablier Docs</Heading>
        </Title>
        <Subtitle>
          <p>Documentation for Sablier Lockup and Sablier Flow</p>
        </Subtitle>
        <Collection>
          <Feature
            description={"High level concepts and protocol definitions"}
            Icon={LightBulbIcon}
            title={"Concepts"}
            to={"/concepts/what-is-sablier"}
          />
          <Feature
            description={"Deployment addresses and integration guides"}
            Icon={DocumentTextIcon}
            title={"Developer Guides"}
            to={"/guides/lockup/overview"}
          />

          <Feature
            description={"Deep dive into protocol specifications"}
            Icon={CodeBracketIcon}
            title={"Technical References"}
            to={"/reference/overview"}
          />

          <Feature
            description={"Official interfaces and brand guidelines"}
            Icon={ComputerDesktopIcon}
            title={"Apps"}
            to={"/apps/features/overview"}
          />
          <Feature
            description={"Off-chain utilities such as the subgraph"}
            Icon={CubeIcon}
            title={"APIs"}
            to={"/api/overview"}
          />
        </Collection>
      </Content>
    </Wrapper>
  );
}
