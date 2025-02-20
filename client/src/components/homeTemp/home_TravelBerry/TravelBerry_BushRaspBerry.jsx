import React, { useState } from "react";
import styled, { css } from "styled-components";
import { item_Bush2, item_RaspBerry } from "Assets/items";

export const TravelBerry_BushRaspBerry = ({ handleCount }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;

    handleCount();
    setIsCollected(true);
  };

  return (
    <Container $isCollected={isCollected} onClick={handleCollect}>
      <Shadow />
      <img src={item_Bush2} />
      <Wrapper $isCollected={isCollected}>
        <Berry1 />
        <Berry2 />
        <Berry3 />
        <Berry4 />
        <Berry5 />
        <Berry6 />
        <Berry7 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 14.45%;
  left: 20.28%;
  transition: 0.5s;

  & img {
    display: block;
    max-width: 9.72vw;
    max-height: 18.26vh;
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
const Berry = styled.img.attrs(() => ({ src: item_RaspBerry }))`
  position: absolute;
`;
const Berry1 = styled(Berry)`
  top: 5%;
  left: 18%;
  width: 35%;
  transform: rotate(35deg);
`;
const Berry2 = styled(Berry)`
  top: 20%;
  right: 10%;
  width: 30%;
  transform: rotate(-40deg);
`;
const Berry3 = styled(Berry)`
  top: 40%;
  left: 15%;
  width: 25%;
  transform: rotate(-40deg);
`;
const Berry4 = styled(Berry)`
  top: 55%;
  right: 15%;
  width: 20%;
  transform: rotate(45deg);
`;
const Berry5 = styled(Berry)`
  top: 60%;
  left: 35%;
  width: 20%;
  transform: rotate(-10deg);
`;
const Berry6 = styled(Berry)`
  top: 70%;
  left: 15%;
  width: 20%;
  transform: rotate(10deg);
`;
const Berry7 = styled(Berry)`
  top: 80%;
  right: 22%;
  width: 20%;
  transform: rotate(-15deg);
`;
