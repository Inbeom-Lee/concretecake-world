import React from "react";
import styled from "styled-components";
import { item_Pot } from "Assets/items";

export const HomeInitial_Pot = () => {
  return (
    <Container>
      <Shadow />
      <img src={item_Pot} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 52.34%;
  /* left: 13.4%; */
  left: 11%;

  & img {
    display: block;
    max-width: 20.42vw;
    max-height: 39.45vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  aspect-ratio: 2;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;
