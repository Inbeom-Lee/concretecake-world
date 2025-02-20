import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import imgButton from "Assets/images/button_Type2.png";

export const SpeechBubblePhase1_Button = ({ setShowPhase, setPhase }) => {
  const { isAppleDevice } = useSelector((state) => state.device);

  const handleClick = () => {
    setShowPhase(false);
    setTimeout(() => setPhase(2), 500);
  };

  return (
    <Container $isApple={isAppleDevice} onClick={handleClick}>
      <Button src={imgButton} />
      <Text>PUT IN THE CAKE</Text>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: ${({ $isApple }) => ($isApple ? "20px" : "fit-content")};
  transition: 0.3s;

  @media (min-width: 1000px) {
    bottom: 26.6%;

    &:hover {
      transform: translateX(-50%) scale(1.1);
    }
  }
`;
const Button = styled.img`
  position: absolute;
  width: 200px;
  z-index: -1;

  @media (min-width: 1000px) {
    width: 250px;
  }
`;
const Text = styled.p`
  font-size: 12px;
  color: #fff;

  @media (min-width: 1000px) {
    font-size: 15px;
  }
`;
