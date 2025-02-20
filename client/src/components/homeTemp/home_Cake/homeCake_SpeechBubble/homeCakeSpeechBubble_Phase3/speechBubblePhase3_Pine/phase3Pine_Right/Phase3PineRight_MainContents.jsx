import React from "react";
import styled from "styled-components";
import { Phase3Right_Text } from "../../common";

export const Phase3PineRight_MainContents = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      Let me share with you the story of Pycnogenol, the mysterious elixir of
      the Enchanted Forests. This miraculous antioxidant comes from the sacred
      bark of French maritime pines and is truly nature's gift to our skin.
      Whispering secrets of youthful vigor and vitality, it works its magic to
      promote healthy skin texture and a vibrant glow. It is infused with a
      blend of cooling and soothing herbs such as peppermint, thyme, oregano,
      rosemary, and lavender, providing a sense of calm and freshness
      reminiscent of a gentle forest breeze. So embrace the enchantment, because
      Pycnogenol is here to treat your skin with forest magic.
    </Text>
  );
};

const Text = styled(Phase3Right_Text)`
  margin-top: 3.5%;
`;
