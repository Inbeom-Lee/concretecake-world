import React from "react";
import styled from "styled-components";
import { item_Tree2 } from "Assets/items";

export const TravelPine_Trees = () => {
  return (
    <>
      <Tree1>
        <Shadow />
        <img src={item_Tree2} />
      </Tree1>
      <Tree2>
        <Shadow />
        <img src={item_Tree2} />
      </Tree2>
      <Tree3>
        <Shadow />
        <img src={item_Tree2} />
      </Tree3>
      <Tree4>
        <Shadow />
        <img src={item_Tree2} />
      </Tree4>
    </>
  );
};

const Container = styled.div`
  position: absolute;

  & img {
    display: block;
  }
`;
const Tree1 = styled(Container)`
  bottom: 3.8%;
  left: 16.94%;

  & img {
    max-width: 11.39vw;
    max-height: 36.83vh;
  }
`;
const Tree2 = styled(Container)`
  top: 43.16%;
  right: 26.04%;

  & img {
    max-width: 7.01vw;
    max-height: 23.44vh;
  }
`;
const Tree3 = styled(Container)`
  top: 51.66%;
  right: 13.13%;

  & img {
    max-width: 5.21vw;
    max-height: 17.48vh;
  }
`;
const Tree4 = styled(Container)`
  bottom: 2.64%;
  right: 22.78%;

  & img {
    max-width: 8.47vw;
    max-height: 27.64vh;
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
