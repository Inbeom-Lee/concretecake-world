import React from "react";
import styled from "styled-components";
import { item_StatusBorder2 } from "Assets/items";
import { Phase3Right_Wrapper, Phase3Right_Text as Text } from "../../common";

export const Phase3HoneyRight_SubTitle = ({ fontBase }) => {
  const fontSize = fontBase * 0.0142;

  return (
    <Wrapper $fontSize={fontSize}>
      <WrapperIngredient $fontSize={fontSize}>
        WITH METHYLGLYOXAL
        <IngredientBorder src={item_StatusBorder2} />
      </WrapperIngredient>
      <Text>
        SOOTHES AND REGENERATES
        <br />
        THE SKIN
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled(Phase3Right_Wrapper)`
  margin-top: 3.5%;
  height: 7.73%;
`;

const WrapperIngredient = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 42%;
  font-size: ${({ $fontSize }) => $fontSize + "px"};
  white-space: nowrap;
`;
const IngredientBorder = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
