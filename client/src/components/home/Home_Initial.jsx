import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHome } from "Contexts";
import LanguageSetting from "Components/LanguageSetting";
import Menu from "Components/Menu";
import { Footer } from "Components/common";
import { HomeElements_Base as Container } from "./common";
import {
  HomeInitial_Road,
  HomeInitial_Clouds,
  HomeInitial_Trees,
  HomeInitial_Bushes,
  HomeInitial_Pot,
  HomeInitial_Troll,
  HomeInitial_Texts,
  HomeInitial_Button,
  HomeInitial_Cards,
} from "./home_Initial/index";

export const Home_Initial = () => {
  const [showPage, setShowPage] = useState(false);

  const { setPage, setPlayMusic } = useHome();

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleStart = () => {
    setPlayMusic(true);
    setShowPage(false);
    setTimeout(() => setPage("travel"), 400);
  };

  return (
    <Container $show={showPage}>
      <LanguageSetting />
      <Menu />
      <HomeInitial_Road />
      <HomeInitial_Clouds />
      <HomeInitial_Trees />
      <HomeInitial_Pot />
      <HomeInitial_Bushes />
      <HomeInitial_Texts />
      {/* <HomeInitial_Troll /> */}
      {/* <HomeInitial_Button handleStart={handleStart} /> */}
      <Wrapper>
        <HomeInitial_Cards handleStart={handleStart} />
        <Footer />
      </Wrapper>
      <Button onClick={() => setPage("travel")}>Go</Button>
    </Container>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
`;
const Button = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
`;
