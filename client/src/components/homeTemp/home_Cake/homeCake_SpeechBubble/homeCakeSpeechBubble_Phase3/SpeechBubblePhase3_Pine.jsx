import React from "react";
import styled, { css } from "styled-components";
import {
  Phase3Pine_Left,
  Phase3Pine_Right,
} from "./speechBubblePhase3_Pine/index";

export const SpeechBubblePhase3_Pine = ({ fontBase, showContents }) => {
  return (
    <Container $showContents={showContents}>
      <Phase3Pine_Left fontBase={fontBase} />
      <Phase3Pine_Right fontBase={fontBase} />
    </Container>
  );
};

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.3s;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: stretch;
  }
  flex-direction: row;
  align-items: stretch;

  ${({ $showContents }) =>
    $showContents === "pine"
      ? css`
          visibility: visible;
          opacity: 1;
          right: 0;
        `
      : $showContents === "berry"
      ? css`
          visibility: hidden;
          opacity: 0;
          right: 20%;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          right: -20%;
        `}
`;
