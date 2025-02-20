import React from "react";
import { Phase3Right_Text as Text } from "../../common";

export const Phase3HoneyRight_Footer = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      Methylglyoxal is an organic compound generated as an intermediate between
      glyoxal and aldhehyde, with a chemical formula of C3H4O2. This compound is
      primarily found in high concentrations in Manuka honey, synthesized
      through the oxidation process of alpha-ketoaldehyde and
      beta-hydroxyaldehyde. Methylglyoxal contributes to neutralizing free
      radicals and oxidative stress, possessing both antimicrobial and
      antioxidant properties, making it a significant component in natural
      substances.
    </Text>
  );
};
