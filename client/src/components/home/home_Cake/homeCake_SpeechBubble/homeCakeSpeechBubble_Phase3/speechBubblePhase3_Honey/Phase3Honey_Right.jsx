import React from "react";
import styled from "styled-components";
import {
  Phase3Right_BorderHorizontal as BorderHorizontal,
  Phase3Right_BorderVertical as BorderVertical,
} from "../common";
import {
  Phase3HoneyRight_Title,
  Phase3HoneyRight_SubTitle,
  Phase3HoneyRight_MainContents,
  Phase3HoneyRight_Ingredients,
  Phase3HoneyRight_Footer,
} from "./phase3Honey_Right/index";

export const Phase3Honey_Right = ({ fontBase }) => {
  return (
    <Container>
      <Phase3HoneyRight_Title fontBase={fontBase} />
      <Phase3HoneyRight_SubTitle fontBase={fontBase} />
      <Phase3HoneyRight_MainContents fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3HoneyRight_Ingredients fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3HoneyRight_Footer fontBase={fontBase} />
      <BorderVertical />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 0 5%;
  width: 53%;
  height: 100%;
`;
