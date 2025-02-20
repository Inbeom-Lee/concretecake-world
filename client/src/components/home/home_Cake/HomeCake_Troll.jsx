import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { item_TrollFront } from "Assets/items";

export const HomeCake_Troll = ({ page }) => {
  const { isAppleDevice } = useSelector((state) => state.device);

  return <Troll src={item_TrollFront} $page={page} $isApple={isAppleDevice} />;
};

const Troll = styled.img`
  position: absolute;
  transition: 1s;

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          bottom: 0;
          right: 0;
          transform: translate(23%, 43%);
          max-width: 36vw;
          max-height: 79.38vh;
        `
      : $page === "cakeDetail"
      ? css`
          bottom: 0;
          right: 0;
          transform: translate(56%, 68%);
          max-width: 46.88vw;
          max-height: ${({ $isApple }) => ($isApple ? `100svh` : `100vh`)};
        `
      : $page === "cakeFinal"
      ? css`
          bottom: 30.47%;
          right: 23.75%;
          max-width: 12.08vw;
          max-height: 28.32vh;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
