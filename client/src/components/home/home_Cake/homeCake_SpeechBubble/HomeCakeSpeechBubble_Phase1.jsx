import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "Hooks";
import { item_SpeechBubble2, item_SpeechBubble5 } from "Assets/items";
import { SpeechBubble_Container } from "./common";
import {
  SpeechBubblePhase1_Icons,
  SpeechBubblePhase1_Text,
  SpeechBubblePhase1_Button,
} from "./homeCakeSpeechBubble_Phase1/index";

export const HomeCakeSpeechBubble_Phase1 = ({ show, setPhase }) => {
  const [showPhase, setShowPhase] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    show && setTimeout(() => setShowPhase(true), 3000);

    return () => setShowPhase(false);
  }, [show]);

  return (
    <Container $showPhase={showPhase}>
      <SpeechBubblePhase1_Icons />
      <SpeechBubble src={isMobile ? item_SpeechBubble5 : item_SpeechBubble2} />
      <SpeechBubblePhase1_Text />
      <SpeechBubblePhase1_Button
        setShowPhase={setShowPhase}
        setPhase={setPhase}
      />
    </Container>
  );
};

const Container = styled(SpeechBubble_Container)`
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);

  @media (min-width: 1000px) {
    bottom: 3.13%;
    right: 6.81%;
    transform: none;
  }
`;
const SpeechBubble = styled.img`
  max-width: 90vw;
  height: 90svh;

  @media (min-width: 1000px) {
    max-width: 87.43vw;
    max-height: 89.55vh;
  }
`;
