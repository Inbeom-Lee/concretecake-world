import React from "react";
import styled, { css } from "styled-components";

export const HomeBackgroundColor_Purple = ({ page }) => {
  return <Purple $page={page} />;
};

const Purple = styled.div`
  position: fixed;
  z-index: -100;
  transition: 3s;

  ${({ $page }) => {
    const isInitial = $page === "initial";
    const isTravel =
      $page === "travelPine" ||
      $page === "travelBerry" ||
      $page === "travelHoney";
    const isCakeAndPot = $page === "cakeAndPot";
    const isCakeDetail = $page === "cakeDetail";
    const isCakeFinal = $page === "cakeFinal";

    return isInitial
      ? css`
          top: -71.7%;
          left: 37.2%;
          width: 172vw;
          height: 214vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            #d2d0f3 19%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 172vw;
        `
      : isTravel
      ? css`
          top: -74.7%;
          left: -71.8%;
          width: 172vw;
          height: 214vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            #d2d0f3 19%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 172vw;
        `
      : isCakeAndPot
      ? css`
          top: 6.1%;
          left: 50%;
          transform: translateX(-50%);
          width: 178.3vw;
          height: 145.6vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            #d2d0f3 19%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 178.3vw;
        `
      : isCakeDetail || isCakeFinal
      ? css`
          top: 33.89%;
          left: 50%;
          transform: translateX(-50%);
          width: 178.3vw;
          height: 179.2vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            #d2d0f3 19%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 178.3vw;
        `
      : null;
  }}
`;
