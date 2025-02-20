import styled, { css } from "styled-components";
import { Container_VH } from "Components";

export const HomeElements_Base = styled(Container_VH).attrs(() => ({
  height: 100,
}))`
  position: relative;
  width: 100vw;
  overflow: hidden;

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
          transition: 0.5s;
        `}
`;
