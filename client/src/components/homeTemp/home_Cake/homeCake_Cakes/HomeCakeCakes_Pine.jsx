import React from "react";
import styled, { css } from "styled-components";
import { image_CakePine } from "Assets/images";
import { icon_Pine } from "Assets/icons";
import { item_StatusBorder3 } from "Assets/items";
import {
  Cakes_Wrapper,
  Cakes_Shadow,
  Cakes_ContainerText as ContainerText,
  Cakes_WrapperText,
  Cakes_Text as Text,
  Cakes_Icon as Icon,
  Cakes_WrapperSub,
  Cakes_Border,
} from "./common";

export const HomeCakeCakes_Pine = ({ page, showText }) => {
  return (
    <Wrapper $page={page}>
      <ShadowPine $page={page} />
      <img src={image_CakePine} />
      <ContainerText $showText={showText}>
        <WrapperText>
          <Text>Forest Spell</Text>
          <Icon src={icon_Pine} />
        </WrapperText>
        <WrapperSub>
          WITH PYCNOGENOL®
          <Border src={item_StatusBorder3} />
        </WrapperSub>
      </ContainerText>
    </Wrapper>
  );
};

const Wrapper = styled(Cakes_Wrapper)`
  top: 0;
  left: 0;

  & img {
    ${({ $page }) =>
      $page === "cakeAndPot"
        ? css`
            max-width: 14.88vw;
            max-height: 21.45vh;
          `
        : css`
            max-width: 29.51vw;
            max-height: 42.58vh;
          `}
  }
`;
const ShadowPine = styled(Cakes_Shadow)`
  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          width: 90%;
          transform: translateX(-40%);
        `
      : css`
          width: 100%;
          transform: translateX(-45%);
        `}
`;
const WrapperText = styled(Cakes_WrapperText)`
  transform: translateX(-40%);
`;
const WrapperSub = styled(Cakes_WrapperSub)`
  bottom: -33%;
  transform: translateX(-40%);
`;
const Border = styled(Cakes_Border)`
  width: 13.51vw;
`;
