import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { item_Pot } from "Assets/items";
import { icon_Molecule2, icon_Molecule3, icon_Molecule4 } from "Assets/icons";

export const HomeCake_Pot = ({ page, phase }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [moveIcon, setMoveIcon] = useState(false);
  const [removeIcon, setremoveIcon] = useState(false);

  useEffect(() => {
    if (phase === 2) {
      setShowIcon(true);
      setTimeout(() => setMoveIcon(true), 1000);
      setTimeout(() => {
        setremoveIcon(true);
      }, 2000);
    }
  }, [phase]);

  return (
    <>
      <Container $page={page}>
        <Shadow />
        <img src={item_Pot} />
      </Container>
      <Wrapper $removeIcon={removeIcon}>
        <Molecule1
          src={icon_Molecule4}
          $showIcon={showIcon}
          $moveIcon={moveIcon}
        />
        <Molecule2
          src={icon_Molecule2}
          $showIcon={showIcon}
          $moveIcon={moveIcon}
        />
        <Molecule3
          src={icon_Molecule3}
          $showIcon={showIcon}
          $moveIcon={moveIcon}
        />
      </Wrapper>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  transition: 1s;

  & img {
    display: block;
  }

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          bottom: 3.42%;
          left: 6.46%;

          & img {
            max-width: 34.72vw;
            max-height: 67.19vh;
          }
        `
      : $page === "cakeDetail"
      ? css`
          bottom: 0;
          left: 0;
          transform: translate(-45%, 55%);

          & img {
            max-width: 52.64vw;
            max-height: 68.62vh;
          }
        `
      : css`
          visibility: hidden;
          opacity: 0;
          bottom: -100%;
          left: -100%;
        `}
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -3%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  aspect-ratio: 2;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;

const Wrapper = styled.div`
  display: ${({ $removeIcon }) => ($removeIcon ? "none" : "block")};
`;
const Molecule = styled.img`
  position: fixed;
  transition: 1s;

  ${({ $showIcon, $moveIcon }) =>
    !$showIcon &&
    !$moveIcon &&
    css`
      top: 70%;
      left: 20%;
      visibility: hidden;
      opacity: 0;
    `}
`;
const Molecule1 = styled(Molecule)`
  width: 3.47vw;
  height: 4.3vh;

  ${({ $showIcon, $moveIcon }) =>
    $moveIcon
      ? css`
          top: 29%;
          left: 42vw;
          visibility: visible;
          opacity: 1;
        `
      : $showIcon
      ? css`
          top: 40%;
          left: 14%;
          visibility: visible;
          opacity: 1;
        `
      : css``}
`;
const Molecule2 = styled(Molecule)`
  width: 2.01vw;
  height: 4.79vh;

  ${({ $showIcon, $moveIcon }) =>
    $moveIcon
      ? css`
          top: 29%;
          left: 61vw;
          visibility: visible;
          opacity: 1;
        `
      : $showIcon
      ? css`
          top: 40%;
          left: 22%;
          visibility: visible;
          opacity: 1;
        `
      : css``}
`;
const Molecule3 = styled(Molecule)`
  width: 3.19vw;
  height: 4.49vh;

  ${({ $showIcon, $moveIcon }) =>
    $moveIcon
      ? css`
          top: 29%;
          left: 78vw;
          visibility: visible;
          opacity: 1;
        `
      : $showIcon
      ? css`
          top: 40%;
          left: 28%;
          visibility: visible;
          opacity: 1;
        `
      : css``}
`;
