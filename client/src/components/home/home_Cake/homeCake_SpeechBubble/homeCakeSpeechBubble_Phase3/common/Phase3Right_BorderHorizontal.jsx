import React from "react";
import styled from "styled-components";

export const Phase3Right_BorderHorizontal = () => {
  return (
    <SVG>
      <Line />
    </SVG>
  );
};

const SVG = styled.svg`
  margin: 6% 0 4%;
  width: 100%;
  height: 2px;
`;
const Line = styled.line.attrs(() => ({
  x1: 0,
  y1: 0,
  x2: 2000,
  y2: 0,
}))`
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
`;
