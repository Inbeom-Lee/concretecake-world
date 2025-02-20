import React from "react";
import styled from "styled-components";
import { item_Cloud1, item_Cloud2 } from "Assets/items";

export const AboutWorld_Clouds = () => {
  return (
    <>
      <CloudLeft src={item_Cloud2} />
      <CloudRight src={item_Cloud1} />
    </>
  );
};

const CloudLeft = styled.img`
  position: absolute;
  top: -25%;
  right: 22%;
  width: 30%;
`;
const CloudRight = styled.img`
  position: absolute;
  top: -1%;
  right: 5%;
  width: 28%;
`;
