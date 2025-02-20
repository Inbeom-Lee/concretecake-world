import React from "react";
import styled from "styled-components";
import { Phase3Right_Wrapper } from "../../common";

export const Phase3HoneyRight_Ingredients = ({ fontBase }) => {
  const fontSize = fontBase * 0.015;

  return (
    <Wrapper $fontSize={fontSize}>
      <Text>3 HONEYS</Text>
      <TextMiddle>Manuka honey</TextMiddle>
      <TextMiddle>Propolis</TextMiddle>
      <TextLast>Royal jelly</TextLast>
    </Wrapper>
  );
};

const Wrapper = styled(Phase3Right_Wrapper)`
  align-items: start;
  gap: 4%;
`;
const Text = styled.p`
  flex: 1;
`;
const TextMiddle = styled(Text)`
  text-align: center;
`;
const TextLast = styled(Text)`
  text-align: right;
`;
