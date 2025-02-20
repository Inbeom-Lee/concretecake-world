import React from "react";
import styled from "styled-components";
import { item_Tree1, item_Tree2, item_Tree3 } from "Assets/items";

export const AboutWorld_Trees = () => {
  return (
    <Base>
      <Tree2>
        <Shadow />
        <img src={item_Tree1} />
      </Tree2>
      <Tree1>
        <Shadow style={{ bottom: "-10%" }} />
        <img src={item_Tree3} />
      </Tree1>
    </Base>
  );
};

const Base = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 6vw;
  aspect-ratio: 0.7;
`;
const Container = styled.div`
  position: absolute;

  & img {
    display: block;
  }
`;
const Tree1 = styled(Container)`
  bottom: 0;
  left: 0;
  width: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const Tree2 = styled(Container)`
  top: 0;
  right: 0;
  width: 60%;

  & img {
    width: 100%;
    height: 100%;
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
