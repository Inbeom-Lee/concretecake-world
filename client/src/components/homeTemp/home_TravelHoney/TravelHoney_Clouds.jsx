import React from "react";
import styled from "styled-components";
import { item_Cloud1, item_Cloud2 } from "Assets/items";

export const TravelHoney_Clouds = () => {
  return (
    <>
      <Cloud1 src={item_Cloud1} />
      <Cloud2 src={item_Cloud1} />
      <Cloud3 src={item_Cloud2} />
    </>
  );
};

const Cloud1 = styled.img`
  position: absolute;
  top: -8.4%;
  left: -21.67%;
  max-width: 67.99%;
  max-height: 45.41%;
`;
const Cloud2 = styled.img`
  position: absolute;
  top: 8.69%;
  right: 34.65%;
  max-width: 14.72%;
  max-height: 9.86%;
`;
const Cloud3 = styled.img`
  position: absolute;
  top: 14.36%;
  right: 14.1%;
  max-width: 14.38%;
  max-height: 14.26%;
`;
