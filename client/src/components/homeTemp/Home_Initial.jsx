import React, { useState, useEffect } from "react";
import { HomeElements_Base as Container, Home_MenuAbout } from "./common";
import {
  HomeInitial_Road,
  HomeInitial_Clouds,
  HomeInitial_Trees,
  HomeInitial_Bushes,
  HomeInitial_Pot,
  HomeInitial_Troll,
  HomeInitial_Texts,
  HomeInitial_Button,
} from "./home_Initial/index";

export const Home_Initial = ({ setPage }) => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleStart = () => {
    setShowPage(false);
    setTimeout(() => setPage("travel"), 400);
  };

  return (
    <Container $show={showPage}>
      {/* <Home_MenuAbout /> */}
      <HomeInitial_Road />
      <HomeInitial_Clouds />
      <HomeInitial_Trees />
      <HomeInitial_Pot />
      <HomeInitial_Bushes />
      <HomeInitial_Troll />
      <HomeInitial_Texts />
      <HomeInitial_Button handleStart={handleStart} />
    </Container>
  );
};
