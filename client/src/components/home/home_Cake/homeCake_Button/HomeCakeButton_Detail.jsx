import React, { useState, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import imgButtonDetail from "Assets/images/button_Cake.png";

export const HomeCakeButton_Detail = ({ setPhase }) => {
  const [showButton, setShowButton] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => setShowButton(true), 1000);
  }, []);

  const handleStart = () => setPhase(3);

  return (
    <ButtonDetail
      src={imgButtonDetail}
      $showButton={showButton}
      onClick={handleStart}
    />
  );
};

const ButtonDetail = styled.img`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;

  @media (min-width: 768px) {
    bottom: 4%;
    left: 50%;
    transform: translateX(-40%);
    width: auto;
    max-width: 28vw;
    max-height: 18vh;
    transition: 0.3s;

    &:hover {
      transform: translateX(-40%) scale(1.1);
    }
  }

  ${({ $showButton }) =>
    $showButton
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
