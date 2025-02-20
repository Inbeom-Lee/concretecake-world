import React from "react";
import styled from "styled-components";
import { item_Tree4 } from "Assets/items";

export const TravelBerry_Trees = () => {
  return (
    <>
      <Tree1>
        <Shadow />
        <img src={item_Tree4} />
      </Tree1>
      <Tree2>
        <Shadow />
        <img src={item_Tree4} />
      </Tree2>
      <Tree3>
        <Shadow />
        <img src={item_Tree4} />
      </Tree3>
      <Tree4>
        <Shadow />
        <img src={item_Tree4} />
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
  bottom: 27.25%;
  left: 7.36%;

  & img {
    max-width: 8.54vw;
    max-height: 13.09vh;
  }
`;
const Tree2 = styled(Container)`
  bottom: 38.28%;
  left: 24.17%;

  & img {
    max-width: 5.63vw;
    max-height: 8.59vh;
  }
`;
const Tree3 = styled(Container)`
  bottom: 48.14%;
  right: 52.57%;

  & img {
    max-width: 2.78vw;
    max-height: 4.2vh;
  }
`;
const Tree4 = styled(Container)`
  bottom: 29.2%;
  right: 22.7%;

  & img {
    max-width: 11.39vw;
    max-height: 17.19vh;
  }
`;
const Shadow = styled.div`
  position: absolute;
  bottom: -13%;
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
