import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import { useSelector } from "react-redux";
import pngInstructionEn from "Assets/images/image_ProductInstructionEn.png";
import pngInstructionKr from "Assets/images/image_ProductInstructionKr.png";

import {
  image_ProductInstructionEn,
  image_ProductInstructionKr,
  image_Instruction1En,
  image_Instruction2En,
  image_Instruction3En,
  image_Instruction4En,
  image_Instruction5En,
  image_Instruction6En,
  image_Instruction7En,
  image_Instruction1Kr,
  image_Instruction2Kr,
  image_Instruction3Kr,
  image_Instruction4Kr,
  image_Instruction5Kr,
  image_Instruction6Kr,
  image_Instruction7Kr,
} from "Assets/images/index";

export const Product_Instruction = () => {
  const { language } = useSelector((state) => state.language);

  const getImage =
    language === "en" ? image_ProductInstructionEn : image_ProductInstructionKr;

  if (language === "en") {
    return (
      <Container height={100}>
        <ImageOverall src={pngInstructionEn} />
        <ImageItem src={image_Instruction1En} />
        <ImageItem src={image_Instruction2En} />
        <ImageItem src={image_Instruction3En} />
        <ImageItem src={image_Instruction4En} />
        <ImageItem src={image_Instruction5En} />
        <ImageItem src={image_Instruction6En} />
        <ImageItem src={image_Instruction7En} />
        <div style={{ width: "100%", height: "20px" }} />
      </Container>
    );
  }

  if (language === "kr") {
    return (
      <Container height={100}>
        <ImageOverall src={pngInstructionKr} />
        <ImageItem src={image_Instruction1Kr} />
        <ImageItem src={image_Instruction2Kr} />
        <ImageItem src={image_Instruction3Kr} />
        <ImageItem src={image_Instruction4Kr} />
        <ImageItem src={image_Instruction5Kr} />
        <ImageItem src={image_Instruction6Kr} />
        <ImageItem src={image_Instruction7Kr} />
        <div style={{ width: "100%", height: "20px" }} />
      </Container>
    );
  }
};

const Container = styled(Container_VH)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 75px 20px 20px;
  width: 100vw;

  @media (min-width: 1300px) {
    padding: 60px;
  }
`;
const ImageOverall = styled.img`
  display: none;
  width: 80%;
  object-fit: contain;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 1300px) {
    display: block;
  }
`;
const ImageItem = styled.img`
  max-height: 300px;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 1300px) {
    display: none;
  }
`;
