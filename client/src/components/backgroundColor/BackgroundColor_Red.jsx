import React from "react";
import styled, { css } from "styled-components";

export const BackgroundColor_Red = ({ page }) => {
  return <Red $page={page} />;
};

const Red = styled.div`
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
          top: -130%;
          left: -93.6%;
          width: 206vw;
          height: 210vh;
          border-radius: 206vw;
          background: radial-gradient(#ffd2e7 0%, rgba(0, 0, 0, 0) 50%);
        `
      : isTravel
      ? css`
          top: -105.9%;
          left: -24.4%;
          width: 206vw;
          height: 200vh;
          background: radial-gradient(#ffd2e7 0%, rgba(0, 0, 0, 0) 50%);
          border-radius: 206vw;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `;
  }}
`;
