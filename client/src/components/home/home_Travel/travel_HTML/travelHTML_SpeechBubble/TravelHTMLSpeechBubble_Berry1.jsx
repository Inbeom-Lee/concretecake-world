import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "Hooks";
import { item_SpeechBubble1, item_SpeechBubble2 } from "Assets/items";
import {
  SpeechBubble_Container,
  SpeechBubble_Image,
  SpeechBubble_Text,
} from "./speechBubbleElements";

export const TravelHTMLSpeechBubble_Berry1 = ({ isVisible }) => {
  const [isCollected, setIsCollected] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isCN = process.env.REGION === "CN";

  const styleCN = {
    fontSize: "18px",
    left: "10%",
    lineHeight: 2,
  };
  const styleCNMobile = {
    fontSize: "16px",
    left: "8%",
    lineHeight: 2,
  };

  const handleScroll = () => !isMobile && setIsCollected(true);
  const handleClick = () => setIsCollected(true);

  return (
    <Container
      $show={isVisible && !isCollected}
      onWheel={handleScroll}
      onClick={handleClick}
    >
      <SpeechBubble_Image
        src={isMobile ? item_SpeechBubble2 : item_SpeechBubble1}
      />
      <Text style={isCN ? (isMobile ? styleCNMobile : styleCN) : {}}>
        {/* THESE VARIOUS BERRIES,
        <br />
        THEY'RE THE KEY
        <br />
        INGREDIENTS IN THE
        <br />
        BERRY WHISPER CAKE.
        <br />
        ABSOLUTELY FRESH!
        <br />
        KEEP FOLLOWING ME! */}
        这些各种各样的浆果,
        <br />
        它们是空客利特蛋糕浆果耳语的关键成分.
        <br />
        绝对新鲜！继续跟着我！
      </Text>
    </Container>
  );
};

const Container = styled(SpeechBubble_Container)`
  @media (min-width: 600px) {
    top: calc(50% + 50px);
    left: calc(50% - 300px);
    transform: translate(100%, -100%);
  }
`;
const Text = styled(SpeechBubble_Text)`
  left: 18%;
`;
