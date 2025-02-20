import React from "react";
import styled from "styled-components";
import { item_Cloud1, item_Cloud2 } from "Assets/items";

export const HomeInitial_Clouds = () => {
  return (
    <>
      <CloudLeft src={item_Cloud2} />
      {/* <CloudRight src={item_Cloud1} /> */}
    </>
  );
};

const CloudLeft = styled.img`
  position: absolute;
  top: 5.8%;
  left: 3.8%;
  width: 19.5%;
`;
const CloudRight = styled.img`
  position: absolute;
  top: -9.7%;
  right: -10%;
  width: 33.1%;
`;
