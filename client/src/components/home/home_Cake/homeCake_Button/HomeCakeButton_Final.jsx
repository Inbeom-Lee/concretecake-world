import React, { useState, useLayoutEffect, useRef } from "react";
import styled, { css } from "styled-components";
import imgButtonShop from "Assets/images/button_Shop.png";
import imgButtonAgain from "Assets/images/button_ExploreAgain.png";
import { item_SpeechBubble2 } from "Assets/items";

export const HomeCakeButton_Final = ({ setPage, setShowPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [fontSize, setFontSize] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const refContainer = useRef(null);

  useLayoutEffect(() => {
    if (!isLoaded || !refContainer.current) return;

    const resizeSpeechBubbleFinal = () => {
      const { clientHeight } = refContainer.current;
      const calculatedFontSize = clientHeight * 0.065;

      setFontSize(`${calculatedFontSize}px`);
    };

    resizeSpeechBubbleFinal();
    window.addEventListener("resize", resizeSpeechBubbleFinal);

    return () => window.removeEventListener("resize", resizeSpeechBubbleFinal);
  }, [refContainer.current, isLoaded]);

  const handleShow = () => setShowModal(true);

  const handleAgain = () => {
    setShowPage(false);
    setTimeout(() => setPage("travel"), 400);
  };

  return (
    <Wrapper>
      <ButtonShop src={imgButtonShop} onClick={handleShow} />
      <ButtonAgain src={imgButtonAgain} onClick={handleAgain} />
      <Container $showModal={showModal}>
        <SpeechBubble
          ref={refContainer}
          src={item_SpeechBubble2}
          onLoad={() => setIsLoaded(true)}
        />
        <Text $fontSize={fontSize}>
          SHOP WILL OPEN SOON!
          <br />
          THANK YOU FOR YOUR
          <br />
          PATIENCE AND VISIT TODAY.
          <br />
          TROLL HOPE TO SEE YOU
          <br />
          AGAIN HERE!✧
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled.img`
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const ButtonShop = styled(Button)`
  width: 160px;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
const ButtonAgain = styled(Button)`
  width: 160px;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
const Container = styled.div`
  position: absolute;
  bottom: 100%;
  right: 60%;
  width: fit-content;
  height: fit-content;
  z-index: 100;

  ${({ $showModal }) =>
    $showModal
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: 0.5s;
        `}
`;
const SpeechBubble = styled.img`
  max-width: 36.18vw;
  max-height: 37.01vh;
`;
const Text = styled.p.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 75%;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 150%;
`;
