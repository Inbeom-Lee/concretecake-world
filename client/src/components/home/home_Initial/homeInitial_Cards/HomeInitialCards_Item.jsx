import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

export const HomeInitialCards_Item = ({ dataCard, handleStart }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate();

  const { image, title, description, button, route, handler } = dataCard;

  const handleShow = () => setShowPopUp((prev) => !prev);
  const handleClose = () => setShowPopUp(false);

  const handleClick = () => {
    route ? navigate(route) : handler ? handler() : handleShow();
  };

  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Desciption>{description}</Desciption>
      <Button src={button} onClick={handleClick} />
      <PopUp $show={showPopUp} onClick={handleClose}>
        준비 중입니다.
      </PopUp>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
  max-width: 289px;
  aspect-ratio: 289 / 376;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.16);
`;
const Image = styled.img`
  --ratio: 10 / 289;
  margin-bottom: calc(var(--ratio) * 100%);
  width: 60%;
`;
const Title = styled.h4`
  --ratio: 8 / 289;
  margin-bottom: calc(var(--ratio) * 100%);
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    font-size: 24px;
  }
`;
const Desciption = styled.p`
  --ratio: 10 / 289;
  margin-bottom: calc(var(--ratio) * 100%);
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1100px) {
    font-size: 16px;
  }
`;
const Button = styled.img`
  --ratio: 26 / 289;
  margin-bottom: calc(var(--ratio) * 100%);
  width: 45%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const PopUp = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  white-space: nowrap;
  border-radius: 8px;
  background: #fff;
  box-shadow: 5px 8px 10px 0px rgba(0, 0, 0, 0.15);
  transition: 0.3s;

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
