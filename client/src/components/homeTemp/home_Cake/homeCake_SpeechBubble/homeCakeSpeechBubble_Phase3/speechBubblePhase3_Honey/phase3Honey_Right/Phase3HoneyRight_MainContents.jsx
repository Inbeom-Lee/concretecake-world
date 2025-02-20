import React from "react";
import styled from "styled-components";
import { Phase3Right_Text } from "../../common";

export const Phase3HoneyRight_MainContents = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      Gather 'round, forest wanderers! Let me spill the beans about the mystical
      elixir known as methylglyoxal. Picture this: a secret ingredient that
      serve your skin with a healthy glow, heals wounds, and fortifies your
      immune system. It's like magic from the heart of nature itself, mainly
      found in New Zealand's Manuka honey. But here's where the real enchantment
      lies: when paired with propolis or royal jelly, its effects skyrocket,
      surpassing any other potion out there.
    </Text>
  );
};

const Text = styled(Phase3Right_Text)`
  margin-top: 3.5%;
`;
