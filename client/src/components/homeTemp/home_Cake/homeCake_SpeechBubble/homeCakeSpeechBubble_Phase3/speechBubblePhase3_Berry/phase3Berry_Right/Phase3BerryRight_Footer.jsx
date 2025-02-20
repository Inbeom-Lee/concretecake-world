import React from "react";
import { Phase3Right_Text as Text } from "../../common";

export const Phase3BerryRight_Footer = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Text $fontSize={fontSize}>
      These berries have been perceived as symbols of health and beauty since
      ancient times. This perception stems from the belief that these berries
      represent the maximized power of nature. Consequently, various legends and
      stories have been formed around them, particularly prominent in
      Scandinavian culture.
    </Text>
  );
};
