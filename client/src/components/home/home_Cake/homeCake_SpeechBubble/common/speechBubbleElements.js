import styled, { css } from "styled-components";

export const SpeechBubble_Container = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  z-index: 100;

  ${({ $showPhase }) =>
    $showPhase
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: 0.5s;
        `}
`;
