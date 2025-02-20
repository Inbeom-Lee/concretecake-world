import React from "react";
import styled from "styled-components";
import { icon_Honey } from "Assets/icons";
import { Phase3Right_Wrapper as Wrapper } from "../../common";

export const Phase3HoneyRight_Title = ({ fontBase }) => {
  const fontSize = fontBase * 0.0578;

  return (
    <Wrapper $fontSize={fontSize}>
      <p>Magic</p>
      <p>Honey</p>
      <Icon src={icon_Honey} />
    </Wrapper>
  );
};

const Icon = styled.img`
  width: 5.84%;
`;
