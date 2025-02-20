import React, { useState } from "react";
import styled, { css } from "styled-components";
import { item_Tree1, item_PineLeaf } from "Assets/items";

export const TravelPine_TreePine = ({ handleCount }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;

    handleCount();
    setIsCollected(true);
  };

  return (
    <Container $isCollected={isCollected} onClick={handleCollect}>
      <Shadow />
      <img src={item_Tree1} />
      <Wrapper $isCollected={isCollected}>
        <PineLeaf1 />
        <PineLeaf2 />
        <PineLeaf3 />
        <PineLeaf4 />
        <PineLeaf5 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 34.38%;
  right: 34.72%;
  transition: 0.5s;

  & img {
    display: block;
    max-width: 13.75vw;
    max-height: 42.77vh;
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
const PineLeaf = styled.img.attrs(() => ({ src: item_PineLeaf }))`
  position: absolute;
`;
const PineLeaf1 = styled(PineLeaf)`
  top: 10%;
  left: 30%;
  width: 15%;
  transform: rotate(30deg);
`;
const PineLeaf2 = styled(PineLeaf)`
  top: 25%;
  right: 30%;
  width: 15%;
  transform: rotate(-30deg);
`;
const PineLeaf3 = styled(PineLeaf)`
  top: 40%;
  left: 30%;
  width: 15%;
  transform: rotate(-30deg);
`;
const PineLeaf4 = styled(PineLeaf)`
  top: 97%;
  left: 32%;
  width: 10%;
  transform: rotate(-80deg);
`;
const PineLeaf5 = styled(PineLeaf)`
  top: 95%;
  left: 63%;
  width: 10%;
  transform: rotate(-110deg);
`;
