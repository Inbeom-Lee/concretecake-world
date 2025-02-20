import React, { useState, useEffect } from "react";
import { HomeElements_Base as Container, Home_ButtonNext } from "./common";
import {
  TravelPine_Road,
  TravelPine_Clouds,
  TravelPine_Bushes,
  TravelPine_Trees,
  TravelPine_TreeLeaf,
  TravelPine_TreePine,
  TravelPine_Troll,
  TravelPine_Status,
} from "./home_TravelPine/index";

export const Home_TravelPine = ({ setPage }) => {
  const [showPage, setShowPage] = useState(false);
  const [itemCollected, setItemCollected] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleCount = () => setItemCollected((prev) => prev + 1);
  const handleNext = () => {
    setShowPage(false);
    setTimeout(() => setPage("travelBerry"), 400);
  };

  return (
    <Container $show={showPage}>
      <TravelPine_Road />
      <TravelPine_Clouds />
      <TravelPine_Bushes />
      <TravelPine_Trees />
      <TravelPine_TreeLeaf handleCount={handleCount} />
      <TravelPine_TreePine handleCount={handleCount} />
      <TravelPine_Troll />
      <TravelPine_Status itemCollected={itemCollected} />
      <Home_ButtonNext
        showButton={itemCollected === 2}
        handleNext={handleNext}
      />
    </Container>
  );
};
