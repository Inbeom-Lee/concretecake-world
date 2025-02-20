import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "Hooks";
import { item_SpeechBubble2 } from "Assets/items";
import {
  SpeechBubble_Container,
  SpeechBubble_Image,
  SpeechBubble_Text,
} from "./speechBubbleElements";

export const TravelHTMLSpeechBubble_Pine1 = ({ isVisible }) => {
  const [isCollected, setIsCollected] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isCN = process.env.REGION === "CN";

  const styleCN = {
    fontSize: "19px",
    left: "12%",
    lineHeight: 2,
  };
  const styleCNMobile = {
    fontSize: "17px",
    left: "10%",
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
        {/* THESE LEAVES OF PINE
        <br />
        TREE AND HERBS, THEY'RE
        <br />
        THE MAGICAL ESSENCE OF
        <br />
        THE FOREST SPELL CAKE.
        <br />
        LET'S CARRY ON! */}
        这些松树叶和香草植物,
        <br />
        它们是空客利特蛋糕森林魔法的精髓,
        <br />
        让我们继续往前走！
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
