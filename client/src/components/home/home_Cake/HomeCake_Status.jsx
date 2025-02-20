import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { item_StatusBorder, item_StatusBorder4 } from "Assets/items";
import { icon_Pine, icon_Berry, icon_Honey } from "Assets/icons";

export const HomeCake_Status = ({ page }) => {
  const [moveBerry, setMoveBerry] = useState(false);
  const [showSmall, setShowSmall] = useState(false);

  useEffect(() => {
    setTimeout(() => setMoveBerry(true), 1000);
    setTimeout(() => setShowSmall(true), 2000);
  }, []);

  return (
    <Container $page={page} $showSmall={showSmall}>
      <BorderBig src={item_StatusBorder} $showSmall={showSmall} />
      <BorderSmall src={item_StatusBorder4} $show={showSmall} />
      <WrapperPine $show={!showSmall}>
        <IconPine src={icon_Pine} $move={moveBerry} />
        <Text>X&nbsp;2</Text>
      </WrapperPine>
      <WrapperBerry $show={!showSmall}>
        <IconBerry src={icon_Berry} $move={moveBerry} />
        <Text>X&nbsp;3</Text>
      </WrapperBerry>
      <WrapperHoney $show={!showSmall}>
        <IconHoney src={icon_Honey} $move={moveBerry} />
        <Text>X&nbsp;1</Text>
      </WrapperHoney>
      <TextMixAndBake $show={showSmall}>
        MIX &<br />
        BAKE
      </TextMixAndBake>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 1s;

  @media (min-width: 520px) {
    top: 30px;
    left: 30px;
  }

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  ${({ $showSmall }) =>
    $showSmall
      ? css`
          width: 78px;
          height: 47.01px;

          @media (min-width: 520px) {
            width: 110px;
            height: 66.3px;
          }
        `
      : css`
          width: 260px;
          height: 47.78px;

          @media (min-width: 520px) {
            width: 400px;
            height: 73.51px;
          }
        `}
`;
const BorderBig = styled.img`
  position: absolute;
  transition: width 1s;

  ${({ $showSmall }) =>
    $showSmall
      ? css`
          visibility: hidden;
          width: 0;
          transition: 0;
        `
      : css`
          width: 260px;

          @media (min-width: 520px) {
            width: 400px;
          }
        `}
`;
const BorderSmall = styled.img`
  position: absolute;
  width: 78px;

  @media (min-width: 520px) {
    width: 110px;
  }

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;

  @media (min-width: 520px) {
    gap: 18px;
  }

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
const WrapperPine = styled(Wrapper)`
  padding-left: 24px;
  left: 20px;

  @media (min-width: 520px) {
    padding-left: 40px;
    left: 25px;
  }
`;
const WrapperBerry = styled(Wrapper)`
  padding-left: 24px;
  left: 105px;

  @media (min-width: 520px) {
    padding-left: 40px;
    left: 155px;
  }
`;
const WrapperHoney = styled(Wrapper)`
  padding-left: 24px;
  left: 190px;

  @media (min-width: 520px) {
    padding-left: 40px;
    left: 280px;
  }
`;
const Icon = styled.img`
  position: absolute;
  transition: 1s;

  ${({ $move }) =>
    !$move &&
    css`
      top: 0;
      left: 0;
    `}
`;

const IconPine = styled(Icon)`
  width: 18px;

  @media (min-width: 520px) {
    width: 32px;
  }

  ${({ $move }) =>
    $move &&
    css`
      top: 200px;
      left: 5vw;

      @media (min-width: 620px) {
        left: 10vw;
      }

      @media (min-width: 768px) {
        top: 24vh;
        left: 36vw;
      }
    `}
`;
const IconBerry = styled(Icon)`
  width: 18px;

  @media (min-width: 520px) {
    width: 32px;
  }

  ${({ $move }) =>
    $move &&
    css`
      top: 200px;
      left: 19vw;

      @media (min-width: 620px) {
        left: 25vw;
      }

      @media (min-width: 768px) {
        top: 24vh;
        left: 51vw;
      }
    `}
`;
const IconHoney = styled(Icon)`
  width: 18px;

  @media (min-width: 520px) {
    width: 32px;
  }

  ${({ $move }) =>
    $move &&
    css`
      top: 200px;
      left: 29vw;

      @media (min-width: 620px) {
        left: 35vw;
      }

      @media (min-width: 768px) {
        top: 24vh;
        left: 64vw;
      }
    `}
`;
const Text = styled.p`
  font-size: 15px;

  @media (min-width: 520px) {
    font-size: 25px;
  }
`;
const TextMixAndBake = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  line-height: 100%;
  white-space: nowrap;
  transition: 0.5s;

  @media (min-width: 520px) {
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
