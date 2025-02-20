import React from "react";
import styled from "styled-components";
import { item_Bush1 } from "Assets/items";

export const TravelPine_Bushes = () => {
  return (
    <>
      <Bush1>
        <Shadow />
        <img src={item_Bush1} />
      </Bush1>
      <Bush2>
        <Shadow />
        <img src={item_Bush1} />
      </Bush2>
      <Bush3>
        <Shadow />
        <img src={item_Bush1} />
      </Bush3>
    </>
  );
};

const Container = styled.div`
  position: absolute;

  & img {
    display: block;
  }
`;
const Bush1 = styled(Container)`
  bottom: 16.99%;
  left: 27.64%;
  & img {
    max-width: 7.71vw;
    max-height: 10.94vh;
  }
`;
const Bush2 = styled(Container)`
  bottom: 33.79%;
  left: 37.62%;
  & img {
    max-width: 4.93vw;
    max-height: 7.32vh;
  }
`;
const Bush3 = styled(Container)`
  bottom: 9.38%;
  right: 6.18%;
  & img {
    max-width: 7.64vw;
    max-height: 10.84vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 130%;
  aspect-ratio: 145/52;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;
