import React from "react";
import styled, { css } from "styled-components";
import {
  Phase3Berry_Left,
  Phase3Berry_Right,
} from "./speechBubblePhase3_Berry/index";

export const SpeechBubblePhase3_Berry = ({ fontBase, showContents }) => {
  return (
    <Container $showContents={showContents}>
      <Phase3Berry_Left fontBase={fontBase} />
      <Phase3Berry_Right fontBase={fontBase} />
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
    $showContents === "berry"
      ? css`
          visibility: visible;
          opacity: 1;
          right: 0;
        `
      : $showContents === "honey"
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
