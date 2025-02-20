import React from "react";
import styled from "styled-components";
import { icon_Berry } from "Assets/icons";
import { Phase3Right_Wrapper as Wrapper } from "../../common";

export const Phase3BerryRight_Title = ({ fontBase }) => {
  const fontSize = fontBase * 0.0578;

  return (
    <Wrapper $fontSize={fontSize}>
      <p>Berry</p>
      <p>Whisper</p>
      <Icon src={icon_Berry} />
    </Wrapper>
  );
};

const Icon = styled.img`
  width: 5.84%;
`;
