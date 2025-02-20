import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

export const Home_ButtonNext = ({ handleNext, showButton }) => {
  const [isVisible, setIsVisible] = useState(false);

  const refContainer = useRef();

  useEffect(() => {
    showButton && setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, [showButton]);

  const handleButton = () => {
    setIsVisible(false);
    setTimeout(() => handleNext(), 200);
  };

  const render = (
    <Container ref={refContainer} $show={isVisible}>
      <Button onClick={handleButton}>
        <Text>Next</Text>
        <Arrow />
      </Button>
    </Container>
  );
  return render;
};

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  z-index: 100;
  transition: 0.5s;

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        `}
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 0.5vw;
  width: 10vw;
  min-width: 100px;
  max-width: 200px;
  aspect-ratio: 2;
  border: 3px solid #fff;
  border-radius: 14px;
  transition: 0.5s;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;
const Text = styled.div`
  font-size: 2vw;
  color: #fff;
  transition: 0.5s;
`;
const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1vw solid transparent;
  border-right: 1vw solid transparent;
  border-top: calc(1vw / 2) solid #fff;
  border-radius: 10px;
  transition: 0.5s;
`;
