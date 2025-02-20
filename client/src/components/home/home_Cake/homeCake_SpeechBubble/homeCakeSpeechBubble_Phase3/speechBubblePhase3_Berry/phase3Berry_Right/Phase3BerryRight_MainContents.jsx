import React from "react";
import styled from "styled-components";
import { Phase3Right_Text } from "../../common";

export const Phase3BerryRight_MainContents = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      Behold the wondrous tale of wild berries - raspberries, cranberries,
      blackberries, blueberries, strawberries and the mysterious acai berry.
      Deep within these tiny fruits lies powerful sorcery - proanthocyanidins
      provide robust antioxidant properties, weaving a protective spell around
      our cells, protecting them from the damage of oxidation and defying the
      passage of time. Also nesteled within these berries lie the gentle touch
      of vitamin C and the subtle whispers of flavonoids, which entice our skin
      to glow with radiance. So witness the enchantment as it reveals nature's
      hidden beauty.
    </Text>
  );
};

const Text = styled(Phase3Right_Text)`
  margin-top: 3.5%;
`;
