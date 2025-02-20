import React from "react";
import styled from "styled-components";
import { item_Cloud1, item_Cloud2 } from "Assets/items";

export const TravelBerry_Clouds = () => {
  return (
    <>
      <Cloud1 src={item_Cloud1} />
      <Cloud2 src={item_Cloud1} />
      <Cloud3 src={item_Cloud2} />
      <Cloud4 src={item_Cloud2} />
    </>
  );
};

const Cloud1 = styled.img`
  position: absolute;
  top: 27.83%;
  left: 17.78%;
  max-width: 13.82%;
  max-height: 9.28%;
`;
const Cloud2 = styled.img`
  position: absolute;
  top: 20.31%;
  left: 34.03%;
  max-width: 7.85%;
  max-height: 5.27%;
`;
const Cloud3 = styled.img`
  position: absolute;
  top: 16.5%;
  right: 26.25%;
  max-width: 18.26%;
  max-height: 18.16%;
`;
const Cloud4 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -60%);
  max-width: 50.97%;
  max-height: 50.78%;
`;
