import React from "react";
import styled from "styled-components";
import { item_Bush1 } from "Assets/items";

export const HomeInitial_Bushes = () => {
  return (
    <>
      <BushLeft src={item_Bush1} />
      <BushRight src={item_Bush1} />
    </>
  );
};

const BushLeft = styled.img`
  position: absolute;
  bottom: -4.59%;
  left: -4.44%;
  width: 21.39%;
`;
const BushRight = styled.img`
  position: absolute;
  bottom: 59.77%;
  right: 8.54%;
  width: 2.71%;
  opacity: 0.1;
`;
