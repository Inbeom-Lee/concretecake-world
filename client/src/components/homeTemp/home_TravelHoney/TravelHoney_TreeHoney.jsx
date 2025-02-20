import React, { useState } from "react";
import styled, { css } from "styled-components";
import { item_Tree5, item_BeeHive, item_Honey } from "Assets/items";

export const TravelHoney_TreeHoney = ({ handleCount }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    handleCount();
    setIsCollected(true);
  };

  return (
    <Container $isCollected={isCollected} onClick={handleCollect}>
      <ShadowTree />
      <img src={item_Tree5} />
      <Wrapper $isCollected={isCollected}>
        <BeeHive src={item_BeeHive} />
        <ShadowBeeHive />
        <Honey1 />
        <Honey2 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 31.54%;
  right: 22.92%;
  transition: 0.5s;

  & img {
    display: block;
    max-width: 18.47vw;
    max-height: 35.23vh;
  }

  ${({ $isCollected }) =>
    !$isCollected &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `}
`;
const ShadowTree = styled.div`
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 110%;
  aspect-ratio: 3.5;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: 1;
`;
const BeeHive = styled.img`
  position: absolute;
  top: 36.84%;
  left: -12.03%;
  width: 44.74%;
  height: 35.46%;
  transform: rotateY(180deg);
`;
const ShadowBeeHive = styled.div`
  position: absolute;
  top: 40.5%;
  left: 30.7%;
  transform: translateX(-50%);
  width: 3.73%;
  height: 25.49%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.39) 0%,
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
const Honey = styled.img.attrs(() => ({ src: item_Honey }))`
  position: absolute;
`;
const Honey1 = styled(Honey)`
  bottom: 0%;
  left: 4.89%;
  width: 12.64%;
  height: 6.09%;
`;
const Honey2 = styled(Honey)`
  bottom: -2.22%;
  left: 2.63%;
  width: 4.89%;
  height: 2.49%;
`;
