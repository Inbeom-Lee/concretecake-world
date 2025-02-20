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
          top: 20.41%;
          left: 35.9%;
          width: 50vw;
        `
      : $page === "cakeDetail"
      ? css`
          top: 17.68%;
          left: 5%;
          width: 90vw;
        `
      : $page === "cakeFinal"
      ? css`
          top: 82%;
          left: 5%;
          width: 90vw;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};
`;
