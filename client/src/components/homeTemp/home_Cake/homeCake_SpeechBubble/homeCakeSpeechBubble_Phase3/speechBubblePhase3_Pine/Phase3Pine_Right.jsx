import React from "react";
import styled from "styled-components";
import {
  Phase3Right_BorderHorizontal as BorderHorizontal,
  Phase3Right_BorderVertical as BorderVertical,
} from "../common";
import {
  Phase3PineRight_Title,
  Phase3PineRight_SubTitle,
  Phase3PineRight_MainContents,
  Phase3PineRight_Ingredients,
  Phase3PineRight_Footer,
} from "./phase3Pine_Right/index";

export const Phase3Pine_Right = ({ fontBase }) => {
  return (
    <Container>
      <Phase3PineRight_Title fontBase={fontBase} />
      <Phase3PineRight_SubTitle fontBase={fontBase} />
      <Phase3PineRight_MainContents fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3PineRight_Ingredients fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3PineRight_Footer fontBase={fontBase} />
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
