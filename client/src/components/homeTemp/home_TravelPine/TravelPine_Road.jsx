import React from "react";
import styled from "styled-components";
import { image_Road2 } from "Assets/images";

export const TravelPine_Road = () => {
  return (
    <>
      <Road src={image_Road2} />
    </>
  );
};

const Road = styled.img`
  position: absolute;
  bottom: -0.6%;
  left: 30.07%;
  width: 41.88%;
  height: 44.14%;
  object-fit: fill;
`;
