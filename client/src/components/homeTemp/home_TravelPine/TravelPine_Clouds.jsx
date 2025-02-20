import React from "react";
import styled from "styled-components";
import { item_Cloud1, item_Cloud2 } from "Assets/items";

export const TravelPine_Clouds = () => {
  return (
    <>
      <CloudLeft src={item_Cloud2} />
      <CloudRight1 src={item_Cloud2} />
      <CloudRight2 src={item_Cloud1} />
    </>
  );
};

const CloudLeft = styled.img`
  position: absolute;
  top: 17.19%;
  left: 9.9%;
  max-width: 19.1vw;
  max-height: 18.85vh;
`;
const CloudRight1 = styled.img`
  position: absolute;
  top: 4.39%;
  right: 14.79%;
  max-width: 19.1vw;
  max-height: 18.85vh;
`;
const CloudRight2 = styled.img`
  position: absolute;
  top: 16.89%;
  right: 4.72%;
  max-width: 16.25vw;
  max-height: 10.94vh;
`;
