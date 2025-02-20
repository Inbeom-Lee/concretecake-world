import React from "react";
import { Phase3Right_Text as Text } from "../../common";

export const Phase3PineRight_Footer = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      This herb complex is a product developed through our proprietary
      pre-treatment technology, solid fermentation, surpassing the simple
      concept of extracts to become a high-value-added product that combines
      modern technology and science.
    </Text>
  );
};
