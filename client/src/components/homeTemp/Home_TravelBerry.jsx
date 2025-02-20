import React, { useState, useEffect } from "react";
import { HomeElements_Base as Container, Home_ButtonNext } from "./common";
import {
  TravelBerry_Road,
  TravelBerry_Clouds,
  TravelBerry_Bushes,
  TravelBerry_Trees,
  TravelBerry_BushBlackBerry,
  TravelBerry_BushRaspBerry,
  TravelBerry_BushBlueBerry,
  TravelBerry_Troll,
  TravelBerry_Status,
} from "./home_TravelBerry/index";

export const Home_TravelBerry = ({ setPage }) => {
  const [showPage, setShowPage] = useState(false);
  const [itemCollected, setItemCollected] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleCount = () => setItemCollected((prev) => prev + 1);
  const handleNext = () => {
    setShowPage(false);
    setTimeout(() => setPage("travelHoney"), 400);
  };

  return (
    <Container $show={showPage}>
      <TravelBerry_Road />
      <TravelBerry_Clouds />
      <TravelBerry_Bushes />
      <TravelBerry_Trees />
      <TravelBerry_BushBlackBerry handleCount={handleCount} />
      <TravelBerry_BushRaspBerry handleCount={handleCount} />
      <TravelBerry_BushBlueBerry handleCount={handleCount} />
      <TravelBerry_Troll />
      <TravelBerry_Status itemCollected={itemCollected} />{" "}
      <Home_ButtonNext
        showButton={itemCollected === 3}
        handleNext={handleNext}
      />
    </Container>
  );
};
