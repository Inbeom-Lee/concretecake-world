import React from "react";
import styled from "styled-components";
import { item_Tree3, item_Tree4 } from "Assets/items";

export const TravelHoney_Trees = () => {
  return (
    <>
      <Tree1>
        <Shadow />
        <img src={item_Tree4} />
      </Tree1>
      <Tree2>
        <Shadow />
        <img src={item_Tree3} />
      </Tree2>
      <Tree3>
        <Shadow />
        <img src={item_Tree3} />
      </Tree3>
      <Tree4>
        <Shadow />
        <img src={item_Tree3} />
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
  bottom: 0;
  left: 0;
  transform: translate(-40%, 55%);

  & img {
    max-width: 54.58vw;
    max-height: 83.4vh;
  }
`;
const Tree2 = styled(Container)`
  bottom: 35.45%;
  left: 20.28%;

  & img {
    max-width: 8.82vw;
    max-height: 19.34vh;
  }
`;
const Tree3 = styled(Container)`
  bottom: 8.4%;
  left: 32.43%;

  & img {
    max-width: 11.94vw;
    max-height: 26.17vh;
  }
`;
const Tree4 = styled(Container)`
  bottom: 32.81%;
  right: 16.74%;

  & img {
    max-width: 8.82vw;
    max-height: 19.34vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -10%;
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
