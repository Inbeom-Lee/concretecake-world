import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "Hooks";
import { item_SpeechBubble2 } from "Assets/items";
import {
  SpeechBubble_Container,
  SpeechBubble_Image,
  SpeechBubble_Text,
} from "./speechBubbleElements";

export const TravelHTMLSpeechBubble_Honey1 = ({ isVisible }) => {
  const [isCollected, setIsCollected] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isCN = process.env.REGION === "CN";

  const styleCN = {
    fontSize: "19px",
    left: "9%",
    lineHeight: 2,
  };
  const styleCNMobile = {
    fontSize: "17px",
    left: "7%",
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
      <SpeechBubble_Image src={item_SpeechBubble2} />
      <SpeechBubble_Text
        style={isCN ? (isMobile ? styleCNMobile : styleCN) : {}}
      >
        {/* THIS AMAZING HONEY,
        <br />
        ROYAL JELLY, AND
        <br />
        PROPOLIS PLAY A MAGICAL
        <br />
        ROLE IN THE MAGIC HONEY
        <br />
        CAKE. ALRIGHT, WE'VE GOT
        <br />
        ALL OUR INGREDIENTS NOW! */}
        这些神奇的蜂蜜, 蜂王浆和蜂胶在神奇
        <br />
        的空客利特蛋糕蜂蜜魅力中起着神奇的作用. 
        <br />
        好了, 我们都准备好了！
      </SpeechBubble_Text>
    </Container>
  );
};

const Container = styled(SpeechBubble_Container)`
  @media (min-width: 600px) {
    top: calc(50% + 50px);
    left: calc(50% + 50px);
    transform: translate(-100%, -100%);
  }
`;
