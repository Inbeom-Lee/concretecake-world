import React from "react";
import styled from "styled-components";
import { item_Tree1, item_Tree2, item_Tree3 } from "Assets/items";

export const HomeInitial_Trees = () => {
  return (
    <>
      <Tree1>
        <Shadow style={{ bottom: "-10%" }} />
        <img src={item_Tree3} />
      </Tree1>
      <Tree2>
        <Shadow />
        <img src={item_Tree1} />
      </Tree2>
      <Tree3>
        <Shadow />
        <img src={item_Tree2} />
      </Tree3>
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
  top: 46.5%;
  left: 6%;

  & img {
    max-width: 6.25vw;
  }
`;
const Tree2 = styled(Container)`
  top: 34.18%;
  left: 10%;

  & img {
    max-width: 7.8vw;
  }
`;
const Tree3 = styled(Container)`
  bottom: 53.91%;
  right: 12.29%;
  opacity: 0.5;
  /* filter: blur(2px); */

  & img {
    max-width: 3.4vw;
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
