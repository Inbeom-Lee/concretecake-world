import React from "react";
import styled, { css } from "styled-components";
import { image_CakeBerry } from "Assets/images";
import { icon_Berry } from "Assets/icons";
import { item_StatusBorder2 } from "Assets/items";
import {
  Cakes_Wrapper,
  Cakes_Shadow,
  Cakes_ContainerText as ContainerText,
  Cakes_WrapperText as WrapperText,
  Cakes_Text as Text,
  Cakes_Icon as Icon,
  Cakes_WrapperSub as WrapperSub,
  Cakes_Border as Border,
} from "./common";

export const HomeCakeCakes_Berry = ({ page, showText }) => {
  return (
    <WrapperBerry $page={page}>
      <Cakes_Shadow $page={page} />
      <img src={image_CakeBerry} />
      <ContainerText $showText={showText}>
        <WrapperText>
          <Text>Berry Whisper</Text>
          <Icon src={icon_Berry} />
        </WrapperText>
        <WrapperSub>
          WITH PROANTHOCYANIDINS
          <Border src={item_StatusBorder2} />
        </WrapperSub>
      </ContainerText>
    </WrapperBerry>
  );
};

const WrapperBerry = styled(Cakes_Wrapper)`
  top: 0;

  ${({ $page }) =>
    $page === "cakeAndPot"
      ? css`
          left: 50%;
          transform: translate(-38%, 18%);

          & img {
            max-width: 21.522vw;

            @media (min-width: 768px) {
              max-width: 12.66vw;
              max-height: 18.62vh;
            }
          }
        `
      : css`
          left: 50%;
          transform: translate(-38%, 18%);

          & img {
            max-width: 25.14vw;
            max-height: 37vh;
          }
        `}
`;
