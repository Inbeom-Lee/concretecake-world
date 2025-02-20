import React from "react";
import styled, { css } from "styled-components";

export const BackgroundColor_Green = ({ page }) => {
  return <Green $page={page} />;
};

const Green = styled.div`
  position: fixed;
  z-index: -100;
  transition: 3s;

  ${({ $page }) => {
    const isInitial = $page === "initial";
    const isTravel =
      $page === "travel" ||
      $page === "travelPine" ||
      $page === "travelBerry" ||
      $page === "travelHoney";

    return isInitial
      ? css`
          top: 42.2%;
          left: -49.7%;
          width: 191vw;
          height: 98vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(117, 205, 169, 0.75) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 191vw;
        `
      : isTravel
      ? css`
          top: 25.6%;
          left: -20.5%;
          width: 192vw;
          height: 158vh;
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(117, 205, 169, 0.75) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 191vw;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `;
  }}
`;
