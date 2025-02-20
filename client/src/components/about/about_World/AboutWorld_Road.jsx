import React from "react";
import styled from "styled-components";
import { item_Road1 } from "Assets/items";

export const AboutWorld_Road = () => {
  return (
    <>
      <Road src={item_Road1} />
    </>
  );
};

const Road = styled.img`
  position: absolute;
  bottom: 0;
  right: 4.24%;
  max-width: 39.1%;
  max-height: 63.18%;
`;
