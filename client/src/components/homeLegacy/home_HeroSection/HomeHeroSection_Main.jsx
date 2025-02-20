import React from "react";
import styled from "styled-components";
import {
  HomeHeroSectionMain_Logo,
  HomeHeroSectionMain_Phrase,
} from "./homeHeroSection_Main/index";

export const HomeHeroSection_Main = () => {
  const render = (
    <Container>
      <HomeHeroSectionMain_Logo />
      <HomeHeroSectionMain_Phrase />
    </Container>
  );
  return render;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;
  width: 100%;
  height: 100dvh;
  opacity: 0;
  overflow: hidden;

  @media (min-width: 1200px) {
    display: block;
  }

  @keyframes fadeInMainContainer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeInMainContainer 1s forwards;
  animation-delay: 0.5s;
`;
