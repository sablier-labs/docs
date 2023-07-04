import React from "react";
import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
  background-color: var(--sablier-color-background);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: var(--sablier-size-edge);
  margin: 0 auto;
  padding: 0 var(--sablier-size-content);
  box-sizing: border-box;
  position: relative;
  top: 0;
  z-index: 10;
`;

const Light = styled.div<{ horizontal: "left" | "right"; vertical: string }>`
  & {
    position: absolute;
    z-index: 20;
    width: 100vw;
    height: 100%;
    background: radial-gradient(
      circle at ${(props) => props.vertical} center,
      var(--sablier-color-white) -100%,
      var(--sablier-color-background) 30%,
      transparent 30%
    );
    opacity: var(--sablier-size-light);
    filter: blur(60px);
  }

  ${(props) => props.horizontal == "left" && `left: -50vw;`}
  ${(props) => props.horizontal == "right" && `right: 0;`}
`;

interface Props {
  className?: string;
  left?: "top" | "center" | "bottom" | "none";
  right?: "top" | "center" | "bottom" | "none";
}

function Background({ children, className, left = "top", right = "top" }: PropsWithChildren<Props>) {
  return (
    <Wrapper className={className}>
      <Container>
        {left !== "none" && <Light horizontal={"left"} vertical={left} />}
        {right !== "none" && <Light horizontal={"right"} vertical={right} />}
      </Container>
      {children}
    </Wrapper>
  );
}

export default Background;
