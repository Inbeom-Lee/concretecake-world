import React, { useState } from "react";
import styled, { css } from "styled-components";
import { image_CakeHoney, button_Type2 } from "Assets/images";
import { item_SpeechBubble4 } from "Assets/items";
import imgLogo from "Assets/logos/logo_CakeText3D.svg";

export const Phase3Honey_Left = ({ fontBase }) => {
  const [showModal, setShowModal] = useState(false);

  const fontSize = fontBase * 0.025;

  const handleClose = () => setShowModal(false);

  const handleShop = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };

  return (
    <Container onClick={handleClose}>
      <Logo src={imgLogo} />
      <ImageCake src={image_CakeHoney} />
      <ButtonContainer onClick={handleShop}>
        <Button src={button_Type2} />
        <Text>SHOP</Text>
      </ButtonContainer>
      <Modal $showModal={showModal} $fontSize={fontSize}>
        <img src={item_SpeechBubble4} />
        SHOP WILL OPEN SOON.
        <br />
        THANK YOU
        <br />
        FOR YOUR PATIENCE!
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 47%;
  height: 100%;
`;
const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
`;
const ImageCake = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  width: 72%;
`;
const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: fit-content;
  transition: 0.3s;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;
const Button = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
`;
const Text = styled.p`
  font-family: "ABC Maxi Round";
  font-size: 1.67vw;
  color: #fff;
`;
const Modal = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 3%;
  width: 77.8%;
  aspect-ratio: 1.65;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 140%;
  z-index: 10;
  transition: 0.5s;

  & img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: ${$fontSize + "px"};
    `}
  ${({ $showModal }) =>
    $showModal
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
