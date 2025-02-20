import styled, { css } from "styled-components";

export const Cakes_Wrapper = styled.div`
  position: absolute;
  transition: 1s;

  & img {
    display: block;
    transition: 1s;
  }
`;
export const Cakes_Shadow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  aspect-ratio: 4;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #838383 0%,
    rgba(115, 115, 115, 0) 100%
  );
  opacity: 0.7;
  transition: 1s;
  z-index: -1;

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          bottom: -30%;
        `
      : css`
          bottom: -5%;
        `}
`;

export const Cakes_ContainerText = styled.div`
  transition: 0.5s;

  ${({ $showText }) =>
    $showText
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
export const Cakes_WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 1.11vw;
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
`;
export const Cakes_Text = styled.p`
  font-size: 2.5vw;
  white-space: nowrap;
`;
export const Cakes_Icon = styled.img`
  width: 1.88vw;
`;
export const Cakes_WrapperSub = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1vw;
  white-space: nowrap;
`;
export const Cakes_Border = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16.65vw;
`;
