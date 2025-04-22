import styled from "@emotion/styled";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Background from "../Background";

const Mesh = styled.div<{ image?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-position: center;
  opacity: 0.02;
`;

const Fade = styled.div`
  position: absolute;
  left: 0;
  z-index: 30;
  width: 100vw;
  height: 200px;
  background: linear-gradient(0deg, transparent, var(--sablier-color-background));
`;

const FadeBottom = styled(Fade)`
  bottom: 0;
  transform: rotate(180deg);
`;

const Shapes = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  border: 4px solid var(--sablier-color-secondaryMiddle);
  opacity: 1;
`;

const CircleLeft = styled(Circle)`
  height: 80px;
  width: 80px;
  margin-top: -300px;
  margin-left: -900px;

  @media all and (max-width: 1000px) {
    margin-left: -60vw;
  }
`;

const CircleRight = styled(Circle)`
  margin-top: -100px;
  margin-right: -300px;

  @media all and (max-width: 1000px) {
    margin-right: -100vw;
    margin-top: -300px;
  }
  @media all and (max-width: 600px) {
    margin-right: -100vw;
    margin-top: -1000px;
  }
`;

const CircleRightTop = styled(Circle)`
  height: 60px;
  width: 60px;
  margin-top: -500px;
  margin-right: -800px;

  @media all and (max-width: 1000px) {
    margin-right: -20vw;
    margin-top: -550px;
  }
`;

function Underlay() {
  return (
    <Background>
      <Mesh image={useBaseUrl("/decor/grid-pattern.svg")} />
      <FadeBottom />
      <Shapes>
        <CircleLeft />
        <CircleRight />
        <CircleRightTop />
      </Shapes>
    </Background>
  );
}

export default Underlay;
