import React from "react";
import styled from "styled-components";
import {
  Phase3Right_BorderHorizontal as BorderHorizontal,
  Phase3Right_BorderVertical as BorderVertical,
} from "../common";
import {
  Phase3BerryRight_Title,
  Phase3BerryRight_SubTitle,
  Phase3BerryRight_MainContents,
  Phase3BerryRight_Ingredients,
  Phase3BerryRight_Footer,
} from "./phase3Berry_Right/index";

export const Phase3Berry_Right = ({ fontBase }) => {
  return (
    <Container>
      <Phase3BerryRight_Title fontBase={fontBase} />
      <Phase3BerryRight_SubTitle fontBase={fontBase} />
      <Phase3BerryRight_MainContents fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3BerryRight_Ingredients fontBase={fontBase} />
      <BorderHorizontal />
      <Phase3BerryRight_Footer fontBase={fontBase} />
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
