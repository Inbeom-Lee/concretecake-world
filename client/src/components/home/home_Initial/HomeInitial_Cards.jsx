import React from "react";
import styled from "styled-components";
import {
  image_CakePine,
  image_CakeBerry,
  image_CakeHoney,
  image_Troll,
  image_ButtonShop,
  image_ButtonExplore,
} from "Assets/images";
import { HomeInitialCards_Item } from "./homeInitial_Cards/index";

export const HomeInitial_Cards = ({ handleStart }) => {
  const cards = [
    {
      image: image_CakeBerry,
      title: "BERRY WHISPER",
      description: "콘크리트케익 베리 위스퍼",
      button: image_ButtonShop,
      route: "/viewPage/berry",
    },
    {
      image: image_CakePine,
      title: "FOREST SPELL",
      description: "콘크리트케익 포레스트 스펠",
      button: image_ButtonShop,
      // route: "/viewPage/pine",
    },
    {
      image: image_CakeHoney,
      title: "MAGIC HONEY",
      description: "콘크리트케익 매직 허니",
      button: image_ButtonShop,
      // route: "/viewPage/honey",
    },
    {
      image: image_Troll,
      title: "MAGIC HONEY",
      description: "트롤 이야기",
      button: image_ButtonExplore,
      handler: handleStart,
    },
  ];

  return (
    <Container>
      <Wrapper>
        {cards.map((card, index) => (
          <HomeInitialCards_Item key={`cards${index}`} dataCard={card} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin: 35vh auto 10vh;
  width: 289px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);
    padding: 0 16px;
    max-width: 1224px;
    height: fit-content;
  }
  @media (min-width: 1024px) {
  }
`;
