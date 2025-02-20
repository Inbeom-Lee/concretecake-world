import React from "react";
import styled from "styled-components";

export const Phase3Right_BorderVertical = () => {
  return (
    <SVG>
      <Line />
    </SVG>
  );
};

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
`;
const Line = styled.line.attrs(() => ({
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 2000,
}))`
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
`;
