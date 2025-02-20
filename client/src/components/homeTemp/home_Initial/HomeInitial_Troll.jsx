import React from "react";
import styled from "styled-components";
import { item_TrollFront } from "Assets/items";

export const HomeInitial_Troll = () => {
  return (
    <Container>
      <Shadow />
      <img src={item_TrollFront} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 9.08%;
  /* right: 8.19%; */
  right: 11%;

  & img {
    max-width: 20.69vw;
    max-height: 48.44vh;
  }
`;
const Shadow = styled.div`
  position: absolute;
  bottom: -6%;
  left: 50%;
  transform: translateX(-50%);
  width: 115%;
  aspect-ratio: 3.5;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;
