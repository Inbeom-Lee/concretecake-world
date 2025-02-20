import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { contentsAbout_World } from "Constants/contents";
import { Container_VH } from "Components";
import {
  AboutWorld_Road,
  AboutWorld_Clouds,
  AboutWorld_Trees,
  AboutWorld_Bushes,
  AboutWorld_Pot,
  AboutWorld_Troll,
} from "./about_World/index";

export const About_World = () => {
  const { language } = useSelector((state) => state.language);

  const getText = contentsAbout_World[language];

  return (
    <Container height={100}>
      <AboutWorld_Road />
      <AboutWorld_Clouds />
      <AboutWorld_Trees />
      <AboutWorld_Pot />
      <AboutWorld_Bushes />
      <AboutWorld_Troll />
      <Wrapper>
        <Title>The Concrete Cake world</Title>
        <Text>{getText}</Text>
      </Wrapper>
      <Empty />
    </Container>
  );
};

const Container = styled(Container_VH)`
  display: grid;
  place-items: center;
  width: 100vw;
`;
const Wrapper = styled.div`
  margin: 75px 0 20px;
  padding: 24px;
  width: 90%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: 1;

  @media (min-width: 768px) {
    margin: 0;
    padding: 30px;
  }
`;
const Title = styled.h4`
  font-size: 30px;
`;
const Text = styled.p`
  margin-top: 20px;
  font-family: "OpenSans";
  white-space: pre-line;
  word-break: keep-all;
  text-align: justify;
  text-align-last: left;
`;
const Empty = styled.div`
  width: 100%;
  height: 1px;

  @media (min-width: 768px) {
    display: none;
  }
`;
