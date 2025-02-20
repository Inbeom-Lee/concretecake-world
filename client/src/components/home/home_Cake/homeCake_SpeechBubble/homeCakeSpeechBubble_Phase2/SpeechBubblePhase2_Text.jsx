import React from "react";
import styled from "styled-components";

export const SpeechBubblePhase2_Text = ({ fontSize }) => {
  return (
    <Text $fontSize={fontSize}>
      WELL, THE CAKES ARE READY!
      <br />
      WOULD YOU LIKE TO TRY
      <br />
      THESE MAGICAL CAKES
      <br />
      WITH MY SECRET MOJO?
    </Text>
  );
};

const Text = styled.p.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize },
}))`
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 133%;
`;
