import React from "react";
import styled from "styled-components";
import { image_Road2 } from "Assets/images";

export const TravelHoney_Road = () => {
  return (
    <>
      <Road src={image_Road2} />
    </>
  );
};

const Road = styled.img`
  position: absolute;
  bottom: -0.49%;
  left: 32.97%;
  width: 38.61%;
  height: 46.48%;
  object-fit: fill;
`;
