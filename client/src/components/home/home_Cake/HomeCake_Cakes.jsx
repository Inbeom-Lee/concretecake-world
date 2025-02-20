import React, { useState, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import {
  HomeCakeCakes_Pine,
  HomeCakeCakes_Berry,
  HomeCakeCakes_Honey,
} from "./homeCake_Cakes/index";

export const HomeCake_Cakes = ({ page }) => {
  const [showText, setShowText] = useState(false);

  useLayoutEffect(() => {
    page === "cakeDetail" && setTimeout(() => setShowText(true), 1000);
  }, [page]);

  return (
    <Container $page={page}>
      <HomeCakeCakes_Pine page={page} showText={showText} />
      <HomeCakeCakes_Berry page={page} showText={showText} />
      <HomeCakeCakes_Honey page={page} showText={showText} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  transition: 1s;

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          top: 180px;
          left: 50%;
          transform: translateX(-50%);
          width: 85vw;

          @media (min-width: 768px) {
            top: 20.41%;
            left: 35.9%;
            transform: none;
            width: 50vw;
          }
        `
      : $page === "cakeDetail"
      ? css`
          top: 200px;
          left: 50%;
          transform: translateX(-50%);
          width: 90vw;

          @media (min-width: 768px) {
            top: 19%;
            width: 90vw;
          }
        `
      : $page === "cakeFinal"
      ? css`
          top: 90%;
          left: 5%;
          width: 90vw;

          @media (min-width: 768px) {
            top: 82%;
          }
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};
`;
