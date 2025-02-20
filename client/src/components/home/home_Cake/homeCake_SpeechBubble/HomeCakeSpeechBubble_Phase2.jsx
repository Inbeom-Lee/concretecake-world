import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { item_SpeechBubble2 } from "Assets/items";
import { SpeechBubble_Container } from "./common";
import {
  SpeechBubblePhase2_Text,
  SpeechBubblePhase2_Button,
} from "./homeCakeSpeechBubble_Phase2/index";

export const HomeCakeSpeechBubble_Phase2 = ({ show, setPage }) => {
  const [showPhase, setShowPhase] = useState(false);
  const [fontSize, setFontSize] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const refContainer = useRef(null);

  useEffect(() => {
    show && setTimeout(() => setShowPhase(true), 2000);

    return () => setShowPhase(false);
  }, [show]);

  useLayoutEffect(() => {
    if (!isLoaded || !refContainer.current) return;

    const resizeSpeechBubble2 = () => {
      const { clientHeight } = refContainer.current;
      const calculatedFontSize = clientHeight * 0.06;

      setFontSize(`${calculatedFontSize}px`);
    };

    resizeSpeechBubble2();
    window.addEventListener("resize", resizeSpeechBubble2);

    return () => window.removeEventListener("resize", resizeSpeechBubble2);
  }, [refContainer.current, isLoaded]);

  return (
    <Container $showPhase={showPhase}>
      <SpeechBubble
        ref={refContainer}
        src={item_SpeechBubble2}
        onLoad={() => setIsLoaded(true)}
      />
      <SpeechBubblePhase2_Text fontSize={fontSize} />
      <SpeechBubblePhase2_Button
        setShowPhase={setShowPhase}
        setPage={setPage}
      />
    </Container>
  );
};

const Container = styled(SpeechBubble_Container)`
  bottom: 50px;
  right: 50%;
  transform: translateX(50%);

  @media (min-width: 600px) {
    right: 0;
    transform: translate(-50%, -50%);
  }
`;
const SpeechBubble = styled.img`
  width: 300px;

  @media (min-width: 768px) {
    width: auto;
    max-width: 36.18vw;
    max-height: 37.01vh;
  }
`;
