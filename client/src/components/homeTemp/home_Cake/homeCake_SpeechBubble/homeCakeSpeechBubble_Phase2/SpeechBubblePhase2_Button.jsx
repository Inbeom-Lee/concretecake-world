import React, { useRef } from "react";
import styled from "styled-components";
import imgButton from "Assets/images/button_Type2.png";

export const SpeechBubblePhase2_Button = ({ setShowPhase, setPage }) => {
  const refContainer = useRef(null);

  const fontSize = refContainer.current
    ? `${refContainer.current.clientHeight * 0.2}px`
    : null;

  const handleClick = () => {
    setShowPhase(false);
    setTimeout(() => setPage("cakeDetail"), 500);
  };

  return (
    <Container ref={refContainer} onClick={handleClick}>
      <Button src={imgButton} />
      <Text $fontSize={fontSize}>TRY THE CAKES</Text>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 43.95%;
  height: 21.63%;
  transition: 0.3s;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;
const Button = styled.img`
  position: absolute;
  max-width: 250%;
  max-height: 250%;
  z-index: -1;
`;
const Text = styled.p.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize },
}))`
  font-family: "ABC Maxi Round";
  font-size: 100%;
  color: #fff;
`;
