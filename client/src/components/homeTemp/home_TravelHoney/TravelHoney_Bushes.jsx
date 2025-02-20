import React from "react";
import styled from "styled-components";
import { item_Bush4 } from "Assets/items";

export const TravelHoney_Bushes = () => {
  return (
    <>
      <Bush1>
        <Shadow />
        <img src={item_Bush4} />
      </Bush1>
      <Bush3>
        <Shadow />
        <img src={item_Bush4} />
      </Bush3>
      <Bush2>
        <Shadow />
        <img src={item_Bush4} />
      </Bush2>
      <Bush4>
        <Shadow />
        <img src={item_Bush4} />
      </Bush4>
      <Bush5>
        <Shadow />
        <img src={item_Bush4} />
      </Bush5>
      <Bush6>
        <Shadow />
        <img src={item_Bush4} />
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
  bottom: 22.36%;
  left: 22.22%;

  & img {
    max-width: 6.32vw;
    max-height: 7.71vh;
  }
`;
const Bush2 = styled(Container)`
  bottom: 41.7%;
  left: 37.92%;

  & img {
    max-width: 6.32vw;
    max-height: 7.71vh;
  }
`;
const Bush3 = styled(Container)`
  bottom: 43.16%;
  left: 42.15%;

  & img {
    max-width: 3.61vw;
    max-height: 4.39vh;
  }
`;
const Bush4 = styled(Container)`
  bottom: 28.13%;
  right: 11.18%;

  & img {
    max-width: 4.03vw;
    max-height: 4.88vh;
  }
`;
const Bush5 = styled(Container)`
  bottom: 27.15%;
  right: 6.67%;

  & img {
    max-width: 6.11vw;
    max-height: 7.42vh;
  }
`;
const Bush6 = styled(Container)`
  bottom: 0;
  right: 0;
  transform: translate(5%, 30%);

  & img {
    max-width: 26.32vw;
    max-height: 31.93vh;
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
