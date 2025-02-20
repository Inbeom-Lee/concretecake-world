import React from "react";
import styled, { css } from "styled-components";
import { image_CakeHoney } from "Assets/images";
import { icon_Honey } from "Assets/icons";
import { item_StatusBorder2 } from "Assets/items";
import {
  Cakes_Wrapper,
  Cakes_Shadow,
  Cakes_ContainerText as ContainerText,
  Cakes_WrapperText,
  Cakes_Text as Text,
  Cakes_Icon as Icon,
  Cakes_WrapperSub,
  Cakes_Border as Border,
} from "./common";

export const HomeCakeCakes_Honey = ({ page, showText }) => {
  return (
    <Wrapper $page={page}>
      <ShadowHoney $page={page} />
      <img src={image_CakeHoney} />
      <ContainerText $showText={showText}>
        <WrapperText>
          <Text>Magic Honey</Text>
          <Icon src={icon_Honey} />
        </WrapperText>
        <WrapperSub>
          WITH METHYLGLYOXAL
          <Border src={item_StatusBorder2} />
        </WrapperSub>
      </ContainerText>
    </Wrapper>
  );
};

const Wrapper = styled(Cakes_Wrapper)`
  top: 0;
  right: 0;

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          transform: translateY(30%);

          & img {
            max-width: 12.71vw;
            max-height: 16.61vh;
          }
        `
      : css`
          transform: translateY(30%);

          & img {
            max-width: 25.21vw;
            max-height: 33.01vh;
          }
        `}
`;
const ShadowHoney = styled(Cakes_Shadow)`
  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          bottom: -35%;
        `
      : css`
          bottom: -8%;
        `}
`;
const WrapperText = styled(Cakes_WrapperText)`
  bottom: -25%;
`;
const WrapperSub = styled(Cakes_WrapperSub)`
  bottom: -42%;
`;
