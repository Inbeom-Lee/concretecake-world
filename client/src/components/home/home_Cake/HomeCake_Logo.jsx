import React from "react";
import styled, { css } from "styled-components";
import logo_CakeSquare from "Assets/logos/logo_CakeSquare3D.png";

export const HomeCake_Logo = ({ page }) => {
  return <Logo src={logo_CakeSquare} $page={page} />;
};

const Logo = styled.img`
  position: absolute;
  transition: 1s;

  ${({ $page }) =>
    $page === "cakeFinal"
      ? css`
          top: 50%;
          right: 50%;
          transform: translate(50%, -70%);
          max-width: 38.54vw;
          max-height: 53.03vh;
        `
      : css`
          top: 20px;
          right: 20px;
          width: 50px;
        `}

  @media (min-width: 620px) {
    ${({ $page }) =>
      $page === "cakeFinal"
        ? css`
            top: 50%;
            right: 50%;
            transform: translate(50%, -70%);
            max-width: 38.54vw;
            max-height: 53.03vh;
          `
        : css`
            top: 30px;
            right: 30px;
            width: 120px;
          `}
  }
`;
