import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { item_TrollBack, item_SpeechBubble2 } from "Assets/items";

export const TravelHoney_Troll = () => {
  const [fontSize, setFontSize] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const refContainer = useRef(null);

  useLayoutEffect(() => {
    if (!isLoaded || !refContainer.current) return;

    const resizeListener = () => {
      const { clientHeight } = refContainer.current;
      const calculatedFontSize = clientHeight * 0.067;

      setFontSize(`${calculatedFontSize}px`);
    };

    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, [refContainer.current, isLoaded]);

  return (
    <Container>
      <Shadow />
      <Troll src={item_TrollBack} />
      <ContainerSpeech>
        <SpeechBubble
          ref={refContainer}
          src={item_SpeechBubble2}
          onLoad={() => setIsLoaded(true)}
        />
        <SpeechText $fontSize={fontSize}>
          THIS AMAZING HONEY,
          <br />
          ROYAL JELLY, AND
          <br />
          PROPOLIS PLAY A MAGICAL
          <br />
          ROLE IN THE MAGIC HONEY
          <br />
          CAKE. ALRIGHT, WE'VE GOT
          <br />
          ALL OUR INGREDIENTS NOW!
        </SpeechText>
      </ContainerSpeech>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 27.05%;
  left: 47.64%;
`;
const Troll = styled.img`
  width: 8.82vw;
`;
const Shadow = styled.div`
  position: absolute;
  bottom: -11.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 122%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
`;
const ContainerSpeech = styled.div`
  position: absolute;
  bottom: 77.88%;
  right: 39.37%;
  width: fit-content;
  height: fit-content;
`;
const SpeechBubble = styled.img`
  max-width: 28.4vw;
  max-height: 29.1vh;
`;
const SpeechText = styled.div`
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ theme }) => theme.colors.primary};
`;
