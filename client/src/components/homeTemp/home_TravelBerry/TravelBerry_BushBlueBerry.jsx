import React, { useState } from "react";
import styled from "styled-components";
import { item_BushBlueBerry, item_BlueBerry } from "Assets/items";

export const TravelBerry_BushBlueBerry = ({ handleCount }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;

    handleCount();
    setIsCollected(true);
  };

  return (
    <Container $isCollected={isCollected} onClick={handleCollect}>
      <Shadow1 />
      <Shadow2 />
      <Shadow3 />
      <img src={item_BushBlueBerry} />
      <Wrapper $isCollected={isCollected}>
        <Berry1 />
        <Berry2 />
        <Berry3 />
        <Berry4 />
        <Berry5 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 12.01%;
  right: 37.29%;
  transition: 0.5s;

  & img {
    display: block;
    max-width: 12.64vw;
    max-height: 12.21vh;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
const Shadow = styled.div`
  position: absolute;
  bottom: -6%;
  right: -4%;
  width: 45%;
  aspect-ratio: 3.5;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #525252 0%,
    rgba(115, 115, 115, 0) 100%
  );
  z-index: -1;
`;
const Shadow1 = styled(Shadow)`
  bottom: 32%;
  left: -2%;
  width: 60%;
`;
const Shadow2 = styled(Shadow)`
  bottom: 7%;
  left: 28%;
  width: 75%;
`;
const Shadow3 = styled(Shadow)`
  bottom: -6%;
  right: -4%;
  width: 45%;
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
const Berry = styled.img.attrs(() => ({ src: item_BlueBerry }))`
  position: absolute;
`;
const Berry1 = styled(Berry)`
  top: 5%;
  left: 7%;
  width: 20%;
  transform: rotate(-35deg);
`;
const Berry2 = styled(Berry)`
  top: 30%;
  left: 23%;
  width: 25%;
  transform: rotate(40deg);
`;
const Berry3 = styled(Berry)`
  top: 10%;
  left: 50%;
  width: 30%;
  transform: rotate(20deg);
`;
const Berry4 = styled(Berry)`
  top: 58%;
  right: 25%;
  width: 20%;
  transform: rotate(-20deg);
`;
const Berry5 = styled(Berry)`
  top: 62%;
  right: 4%;
  width: 15%;
  transform: rotate(40deg);
`;
