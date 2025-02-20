import React, { useState } from "react";
import styled, { css } from "styled-components";
import { item_Tree2, item_Leaf } from "Assets/items";

export const TravelPine_TreeLeaf = ({ handleCount }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;

    handleCount();
    setIsCollected(true);
  };

  return (
    <Container $isCollected={isCollected} onClick={handleCollect}>
      <Shadow />
      <img src={item_Tree2} />
      <Wrapper $isCollected={isCollected}>
        <Leaf1 />
        <Leaf2 />
        <Leaf3 />
        <Leaf4 />
        <Leaf5 />
        <Leaf6 />
        <Leaf7 />
        <Leaf8 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 29.59%;
  left: 33.61%;
  transition: 0.5s;

  & img {
    display: block;
    max-width: 8.26vw;
  }

  ${({ $isCollected }) =>
    !$isCollected &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `}
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
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${({ $isCollected }) => ($isCollected ? "hidden" : "visible")};
  opacity: ${({ $isCollected }) => ($isCollected ? 0 : 1)};
  transform: ${({ $isCollected }) =>
    $isCollected ? "translateY(-40%)" : "translateY(0)"};
  transition: 1s;
`;
const Leaf = styled.img.attrs(() => ({ src: item_Leaf }))`
  position: absolute;
`;
const Leaf1 = styled(Leaf)`
  top: 5%;
  left: 30%;
  width: 35%;
`;
const Leaf2 = styled(Leaf)`
  top: 20%;
  right: 15%;
  width: 30%;

  transform: scaleX(-1);
`;
const Leaf3 = styled(Leaf)`
  top: 30%;
  left: 15%;
  width: 30%;
`;
const Leaf4 = styled(Leaf)`
  top: 40%;
  right: 20%;
  width: 35%;
  transform: scaleX(-1);
`;
const Leaf5 = styled(Leaf)`
  top: 55%;
  left: 20%;
  width: 30%;
`;
const Leaf6 = styled(Leaf)`
  top: 93%;
  left: 15%;
  width: 20%;
  transform: rotate(160deg) scaleX(-1);
`;
const Leaf7 = styled(Leaf)`
  top: 92%;
  left: 65%;
  width: 20%;
  transform: rotate(-160deg);
`;
const Leaf8 = styled(Leaf)`
  top: 96%;
  left: 50%;
  width: 20%;
  transform: rotate(-160deg);
`;
