import React from "react";
import styled from "styled-components";
import imgButton from "Assets/images/button_Type2.png";

export const SpeechBubblePhase1_Button = ({ setShowPhase, setPhase }) => {
  const handleClick = () => {
    setShowPhase(false);
    setTimeout(() => setPhase(2), 500);
  };

  return (
    <Container onClick={handleClick}>
      <Button src={imgButton} />
      <Text>PUT IN THE CAKE</Text>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 26.6%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  transition: 0.3s;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;
const Button = styled.img`
  position: absolute;
  width: 18vw;
  z-index: -1;
`;
const Text = styled.p`
  font-family: "ABC Maxi Round";
  font-size: 1vw;
  color: #fff;
`;
