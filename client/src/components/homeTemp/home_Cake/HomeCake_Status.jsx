import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { item_StatusBorder, item_StatusBorder4 } from "Assets/items";
import { icon_Pine, icon_Berry, icon_Honey } from "Assets/icons";

export const HomeCake_Status = ({ page }) => {
  const [moveBeery, setMoveBeery] = useState(false);
  const [getSmall, setGetSmall] = useState(false);
  const [showSmall, setShowSmall] = useState(false);

  useEffect(() => {
    setTimeout(() => setMoveBeery(true), 1000);

    setTimeout(() => setShowSmall(true), 2000);
  }, []);

  return (
    <Container $page={page} $showSmall={showSmall}>
      <BorderBig
        src={item_StatusBorder}
        $getSmall={getSmall}
        $showSmall={showSmall}
      />
      <BorderSmall src={item_StatusBorder4} $show={showSmall} />
      <WrapperPine $show={!showSmall}>
        <IconPine src={icon_Pine} $move={moveBeery} />
        <Text>X&nbsp;2</Text>
      </WrapperPine>
      <WrapperBerry $show={!showSmall}>
        <IconBerry src={icon_Berry} $move={moveBeery} />
        <Text>X&nbsp;3</Text>
      </WrapperBerry>
      <WrapperHoney $show={!showSmall}>
        <IconHoney src={icon_Honey} $move={moveBeery} />
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
  top: 3.8%;
  left: 2.64%;
  height: 12.5vh;
  transition: 1s;

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
          height: 6vw;
        `
      : css`
          height: 7vw;
        `}
`;
const BorderBig = styled.img`
  position: absolute;
  transition: width 1s;

  ${({ $getSmall, $showSmall }) =>
    $showSmall
      ? css`
          visibility: hidden;
          width: 0;
          transition: 0;
        `
      : $getSmall
      ? css`
          width: 9.98vw;
        `
      : css`
          width: 38.38vw;
        `}
`;
const BorderSmall = styled.img`
  position: absolute;
  width: 9.98vw;

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
  gap: 1.46vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;

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
  left: 2.49vw;
  padding-left: 4.24vw;
`;
const WrapperBerry = styled(Wrapper)`
  left: 14.71vw;
  padding-left: 4.24vw;
`;
const WrapperHoney = styled(Wrapper)`
  left: 26.79vw;
  padding-left: 4.35vw;
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
  width: 2.78vw;

  ${({ $move }) =>
    $move &&
    css`
      top: 18vh;
      left: 34vw;
    `}
`;
const IconBerry = styled(Icon)`
  width: 2.78vw;

  ${({ $move }) =>
    $move &&
    css`
      top: 18vh;
      left: 41vw;
    `}
`;
const IconHoney = styled(Icon)`
  width: 2.89vw;

  ${({ $move }) =>
    $move &&
    css`
      top: 20vh;
      left: 48vw;
    `}
`;
const Text = styled.p`
  font-size: 2.22vw;
`;
const TextMixAndBake = styled.p`
  position: absolute;
  top: 50%;
  left: 2.2vw;
  transform: translateY(-47%);
  font-size: 1.8vw;
  line-height: 100%;
  white-space: nowrap;
  transition: 0.5s;

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
