import React from "react";
import styled from "styled-components";
import { icon_Pine } from "Assets/icons";
import { Phase3Right_Wrapper as Wrapper } from "../../common";

export const Phase3PineRight_Title = ({ fontBase }) => {
  const fontSize = fontBase * 0.0578;

  return (
    <Wrapper $fontSize={fontSize}>
      <p>Forest</p>
      <p>Spell</p>
      <Icon src={icon_Pine} />
    </Wrapper>
  );
};

const Icon = styled.img`
  width: 5.84%;
`;
