import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useMediaQuery } from "Hooks";
import { item_SpeechBubble3, item_SpeechBubble5 } from "Assets/items";
import { SpeechBubble_Container } from "./common";
import {
  SpeechBubblePhase3_Pine,
  SpeechBubblePhase3_Berry,
  SpeechBubblePhase3_Honey,
  SpeechBubblePhase3_Previous,
  SpeechBubblePhase3_Next,
} from "./homeCakeSpeechBubble_Phase3/index";

export const HomeCakeSpeechBubble_Phase3 = ({ show, setCheckDetail }) => {
  const [showPhase, setShowPhase] = useState(false);
  const [fontBase, setFontBase] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContents, setShowContents] = useState("pine");

  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const refContainer = useRef(null);

  const { clientWidth } = refContainer.current || {};

  useEffect(() => {
    show && setTimeout(() => setShowPhase(true), 10);

    return () => setShowPhase(false);
  }, [show]);

  useEffect(() => {
    setCheckDetail((prev) => {
      return { ...prev, [showContents]: true };
    });
  }, [showContents]);

  useLayoutEffect(() => {
    if (!isLoaded || !refContainer.current) return;

    const resizeSpeechBubble1 = () => {
      const { clientHeight } = refContainer.current;

      setFontBase(clientHeight);
    };

    resizeSpeechBubble1();
    window.addEventListener("resize", resizeSpeechBubble1);

    return () => window.removeEventListener("resize", resizeSpeechBubble1);
  }, [refContainer.current, isLoaded]);

  return (
    <Container $showPhase={showPhase}>
      <SpeechBubble
        ref={refContainer}
        src={isMobile ? item_SpeechBubble5 : item_SpeechBubble3}
        onLoad={() => setIsLoaded(true)}
      />
      <Wrapper>
        <SpeechBubblePhase3_Pine
          fontBase={fontBase}
          showContents={showContents}
        />
        <SpeechBubblePhase3_Berry
          fontBase={fontBase}
          showContents={showContents}
        />
        <SpeechBubblePhase3_Honey
          fontBase={fontBase}
          showContents={showContents}
        />
      </Wrapper>
      <SpeechBubblePhase3_Previous
        parentWidth={clientWidth}
        showContents={showContents}
        setShowContents={setShowContents}
      />
      <SpeechBubblePhase3_Next
        parentWidth={clientWidth}
        showContents={showContents}
        setShowContents={setShowContents}
      />
    </Container>
  );
};

const Container = styled(SpeechBubble_Container)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SpeechBubble = styled.img`
  max-width: 98vw;
  max-height: 95vh;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80%;
`;
