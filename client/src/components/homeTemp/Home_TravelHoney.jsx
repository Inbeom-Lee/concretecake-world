import React, { useState, useEffect } from "react";
import { HomeElements_Base as Container, Home_ButtonNext } from "./common";
import {
  TravelHoney_Road,
  TravelHoney_Clouds,
  TravelHoney_Bushes,
  TravelHoney_Trees,
  TravelHoney_TreeHoney,
  TravelHoney_Troll,
  TravelHoney_Status,
} from "./home_TravelHoney/index";

export const Home_TravelHoney = ({ setPage }) => {
  const [showPage, setShowPage] = useState(false);
  const [itemCollected, setItemCollected] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleCount = () => setItemCollected((prev) => prev + 1);
  const handleNext = () => {
    setShowPage(false);
    setTimeout(() => setPage("cakeAndPot"), 400);
  };

  return (
    <Container $show={showPage}>
      <TravelHoney_Road />
      <TravelHoney_Clouds />
      <TravelHoney_Bushes />
      <TravelHoney_Trees />
      <TravelHoney_TreeHoney handleCount={handleCount} />
      <TravelHoney_Troll />
      <TravelHoney_Status itemCollected={itemCollected} />
      <Home_ButtonNext
        showButton={itemCollected === 1}
        handleNext={handleNext}
      />
    </Container>
  );
};
