import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { item_SpeechBubble2 } from "Assets/items";
import {
  SpeechBubblePhase1_Icons,
  SpeechBubblePhase1_Text,
  SpeechBubblePhase1_Button,
} from "./homeCakeSpeechBubble_Phase1/index";

export const HomeCakeSpeechBubble_Phase1 = ({ setPhase }) => {
  const [showPhase, setShowPhase] = useState(false);
  const [fontSize, setFontSize] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const refContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowPhase(true), 500);
  }, []);

  useLayoutEffect(() => {
    if (!isLoaded || !refContainer.current) return;

    const resizeSpeechBubble1 = () => {
      const { clientHeight } = refContainer.current;
      const calculatedFontSize = clientHeight * 0.02;

      setFontSize(`${calculatedFontSize}px`);
    };

    resizeSpeechBubble1();
    window.addEventListener("resize", resizeSpeechBubble1);

    return () => window.removeEventListener("resize", resizeSpeechBubble1);
  }, [refContainer.current, isLoaded]);

  return (
    <Container $showPhase={showPhase}>
      <SpeechBubblePhase1_Icons />
      <SpeechBubble
        ref={refContainer}
        src={item_SpeechBubble2}
        onLoad={() => setIsLoaded(true)}
      />
      <SpeechBubblePhase1_Text fontSize={fontSize} />
      <SpeechBubblePhase1_Button
        setShowPhase={setShowPhase}
        setPhase={setPhase}
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 3.13%;
  right: 6.81%;
  width: fit-content;
  height: fit-content;

  ${({ $showPhase }) =>
    $showPhase
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;
        `}
`;
const SpeechBubble = styled.img`
  max-width: 87.43vw;
  max-height: 89.55vh;
`;
