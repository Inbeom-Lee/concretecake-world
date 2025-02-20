import React, { useState } from "react";
import styled, { css } from "styled-components";
import { button_Type2 } from "Assets/images";

export const ViewPage_ButtonPrice = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShow = () => setShowPopUp((prev) => !prev);
  const handleClose = () => setShowPopUp(false);

  return (
    <Base>
      <ButtonContainer onClick={handleShow}>
        <Button src={button_Type2} />
        <ButtonText>PRICE</ButtonText>
      </ButtonContainer>
      <PopUp $show={showPopUp} onClick={handleClose}>
        <Wrapper>
          <Text>SINGLE</Text>
          <Text>1회용</Text>
          <TextRight>4,500원</TextRight>
        </Wrapper>
        <Wrapper>
          <Text>DOUBLE </Text>
          <Text>2회용 </Text>
          <TextRight>9,800원</TextRight>
        </Wrapper>
        <Wrapper>
          <Text>BULK</Text>
          <Text>22회용</Text>
          <TextRight>58,000원</TextRight>
        </Wrapper>
      </PopUp>
    </Base>
  );
};

const Base = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);

  @media (min-width: 500px) {
    bottom: none;
    top: 20px;
    right: 16px;
    transform: none;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 160px;
  height: 57.293px;
`;
const Button = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
`;
const ButtonText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 18px;
  text-shadow: -1px 1px 20px #fff;
  color: #fff;
  letter-spacing: 0.9px;
`;
const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  gap: 18px;
  padding: 14px;
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

  @media (min-width: 500px) {
    left: auto;
    right: 0;
    transform: none;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 60px 80px;
`;
const Text = styled.p`
  letter-spacing: 0.75px;
  white-space: nowrap;
`;
const TextRight = styled(Text)`
  text-align: right;
`;
