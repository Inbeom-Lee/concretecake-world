import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useHome } from "Contexts";
import bgm from "Assets/sounds/bgm1.mp3";

export const Home_BackgroundMusic = () => {
  const { page, playMusic, setPlayMusic } = useHome();

  const refAudio = useRef(new Audio(bgm));
  const refButton = useRef();

  useEffect(() => {
    if (!refAudio.current) return;

    refAudio.current.loop = true;
  }, [refAudio.current]);

  useEffect(() => {
    if (!refAudio.current) return;

    if (playMusic) {
      refAudio.current.play();
    } else {
      refAudio.current.pause();
    }
  }, [playMusic, refAudio.current]);

  const togglePlay = () => {
    if (playMusic) {
      refAudio.current.pause();
    }
    if (!playMusic) {
      refAudio.current.play();
    }
    setPlayMusic((prev) => !prev);
  };

  return (
    <Container ref={refButton} $page={page} onClick={togglePlay}>
      <MovingBar $isPlaying={playMusic} $delay={0} />
      <MovingBar $isPlaying={playMusic} $delay={0.2} />
      <MovingBar $isPlaying={playMusic} $delay={0.4} />
      <MovingBar $isPlaying={playMusic} $delay={0.6} />
      <MovingBar $isPlaying={playMusic} $delay={0.8} />
      <MovingBar $isPlaying={playMusic} $delay={1} />
      <MovingBar $isPlaying={playMusic} $delay={1.2} />
      <MovingBar $isPlaying={playMusic} $delay={1.4} />
      <MovingBar $isPlaying={playMusic} $delay={1.6} />
      <MovingBar $isPlaying={playMusic} $delay={1.8} />
      <MovingBar $isPlaying={playMusic} $delay={2} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
  position: fixed;
  height: 20px;
  z-index: 10000;

  ${({ $page }) => {
    switch ($page) {
      case "travel":
        return css`
          bottom: 30px;
          right: 30px;
        `;
      case "cakeAndPot":
      case "cakeDetail":
        return css`
          bottom: 30px;
          left: 30px;
        `;
      default:
        return css`
          top: 30px;
          left: 30px;
        `;
    }
  }}

  @media (min-width: 560px) {
    ${({ $page }) => {
      switch ($page) {
        case "travel":
          return css`
            top: 30px;
            right: 30px;
          `;
        case "cakeAndPot":
        case "cakeDetail":
          return css`
            bottom: 30px;
            left: 30px;
          `;
        default:
          return css`
            top: 30px;
            left: 30px;
          `;
      }
    }}
  }
`;
const MovingBar = styled.div`
  @keyframes resizeHeight {
    from {
      height: 20px;
    }
    to {
      height: 2px;
    }
  }

  width: 1px;
  height: 20px;
  background-color: #795fa5;
  animation: resizeHeight 2s infinite alternate ease-in-out;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  animation-play-state: ${({ $isPlaying }) =>
    $isPlaying ? "running" : "paused"};
`;
