import React from "react";
import styled from "styled-components";
import { item_Bush2, item_Bush3 } from "Assets/items";

export const TravelBerry_Bushes = () => {
  return (
    <>
      <Bush1>
        <Shadow />
        <img src={item_Bush2} />
      </Bush1>
      <Bush2>
        <Shadow />
        <img src={item_Bush3} />
      </Bush2>
      <Bush3>
        <Shadow />
        <img src={item_Bush3} />
      </Bush3>
      <Bush4>
        <Shadow />
        <img src={item_Bush3} />
      </Bush4>
      <Bush5>
        <Shadow />
        <img src={item_Bush3} />
      </Bush5>
      <Bush6>
        <Shadow />
        <img src={item_Bush2} />
      </Bush6>
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
  bottom: 0;
  left: 0;
  transform: translate(-25%, 80%);

  & img {
    max-width: 41.46vw;
    max-height: 82.71vh;
  }
`;
const Bush2 = styled(Container)`
  bottom: 28.91%;
  left: 17.85%;

  & img {
    max-width: 5.97vw;
    max-height: 11.23vh;
  }
`;
const Bush3 = styled(Container)`
  bottom: 43.55%;
  left: 32.5%;

  & img {
    max-width: 2.99vw;
    max-height: 5.66vh;
  }
`;
const Bush4 = styled(Container)`
  bottom: 44.04%;
  right: 35.28%;

  & img {
    max-width: 2.99vw;
    max-height: 5.66vh;
  }
`;
const Bush5 = styled(Container)`
  bottom: 6.05%;
  right: 21.04%;

  & img {
    max-width: 8.75vw;
    max-height: 16.6vh;
  }
`;
const Bush6 = styled(Container)`
  bottom: 0;
  right: 0;
  transform: translate(35%, 65%);

  & img {
    max-width: 41.46vw;
    max-height: 82.71vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 130%;
  aspect-ratio: 3.5;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;
