import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container_VH } from "Components";
import {
  Landing_Menu,
  HomeInitial_Road,
  HomeInitial_Clouds,
  HomeInitial_Trees,
  HomeInitial_Bushes,
  HomeInitial_Pot,
  HomeInitial_Troll,
  HomeInitial_Texts,
  HomeInitial_Button,
} from "./landing/index";

const Landing = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleStart = () => {
    // setShowPage(false);
    // setTimeout(() => setPage("travelPine"), 400);
  };

  return (
    <Container $show={showPage} height={100}>
      {/* <Landing_Menu /> */}
      <HomeInitial_Road />
      <HomeInitial_Clouds />
      <HomeInitial_Trees />
      <HomeInitial_Pot />
      <HomeInitial_Bushes />
      <HomeInitial_Troll />
      <HomeInitial_Texts />
      {/* <HomeInitial_Button handleStart={handleStart} /> */}
    </Container>
  );
};

const Container = styled(Container_VH)`
  position: relative;
  width: 100vw;
  overflow: hidden;

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1.5s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;
        `}
`;

export default Landing;
