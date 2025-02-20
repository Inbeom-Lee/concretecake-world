import styled, { css } from "styled-components";
import { Container_VH } from "Components";

export const HomeElements_Base = styled(Container_VH).attrs(() => ({
  height: 100,
}))`
  position: relative;
  width: 100vw;
  overflow: hidden;
  z-index: -1000;
  transform: translateZ(-1000px);

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1.5s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: 1s;
        `}
`;
