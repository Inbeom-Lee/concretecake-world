import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  contentsAbout_UsText1,
  contentsAbout_UsText2,
} from "Constants/contents";
import { Container_VH } from "Components";
import logo from "Assets/logos/logo_Wordmark.svg";
import troll from "Assets/icons/icon_TrollHead2.svg";
import {
  image_Purple1,
  image_Purple2,
  image_Purple3,
} from "Assets/images/index";

export const About_Us = () => {
  const { language } = useSelector((state) => state.language);

  const Text1 = contentsAbout_UsText1[language];
  const Text2 = contentsAbout_UsText2[language];

  return (
    <Base height={100}>
      <Logo src={logo} />
      <Container>
        <TextBlack>{Text1}</TextBlack>
        <Wrapper>
          <ImageTroll src={troll} />
          <TextPurple>{Text2}</TextPurple>
        </Wrapper>
      </Container>
      <ItemContainer>
        <ItemPurple1 src={image_Purple1} />
        <ItemPurple2 src={image_Purple1} />
        <ItemPurple3 src={image_Purple1} />
      </ItemContainer>
      <ItemPurple4 src={image_Purple2} />
      <ItemPurple5 src={image_Purple3} />
    </Base>
  );
};

const Base = styled(Container_VH)`
  width: 100vw;
`;
const Logo = styled.img`
  display: block;
  margin: 150px auto 0;
  width: 90%;
  max-width: 400px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 100px auto;
  padding: 30px;
  width: 100%;
  max-width: 1000px;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  position: relative;
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 50%;
    padding: 30px;
  }
`;
const ImageTroll = styled.img`
  display: inline;
  margin-right: 5px;
`;
const TextBlack = styled.p`
  flex: 1;
  padding: 20px;
  font-size: 16px;
  text-align: justify;
  text-align-last: left;
  white-space: pre-line;
  line-height: 150%;
  backdrop-filter: blur(10px);
  border-radius: 20px;
`;
const TextPurple = styled.p`
  display: inline;
  color: ${({ theme }) => theme.colors.primary};
  word-break: keep-all;
  white-space: pre-line;
  text-align: justify;
  text-align-last: left;
`;
const ItemContainer = styled.div`
  position: absolute;
  top: 250px;
  left: 15%;
`;
const ItemPurple = styled.img`
  position: absolute;
  z-index: -1;
`;
const ItemPurple1 = styled(ItemPurple)`
  top: 0;
  left: 0;
  width: 45px;
`;
const ItemPurple2 = styled(ItemPurple)`
  top: 20px;
  left: 60px;
  width: 20px;
`;
const ItemPurple3 = styled(ItemPurple)`
  top: 70px;
  left: 30px;
  width: 30px;
`;
const ItemPurple4 = styled(ItemPurple)`
  display: none;
  top: 750px;
  left: 50%;
  width: 150px;
  transform: translateX(-500px);

  @media (min-width: 768px) {
    display: block;
  }
`;
const ItemPurple5 = styled(ItemPurple)`
  display: none;
  top: 800px;
  left: 50%;
  width: 150px;
  transform: translateX(-200px);

  @media (min-width: 768px) {
    display: block;
  }
`;
