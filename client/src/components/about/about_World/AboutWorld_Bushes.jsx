import React from "react";
import styled from "styled-components";
import { item_Bush1 } from "Assets/items";

export const AboutWorld_Bushes = () => {
  return (
    <Container>
      <BushLeft src={item_Bush1} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 21.39%;
`;
const BushLeft = styled.img`
  position: absolute;
  bottom: -25%;
  left: 0;
  width: 100%;
  transform: translate(-10%, 10%);
`;
