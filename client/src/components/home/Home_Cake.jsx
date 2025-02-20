import React, { useState, useEffect } from "react";
import { useHome } from "Contexts";
import { HomeElements_Base as Container, Home_ButtonNext } from "./common";
import {
  HomeCake_Status,
  HomeCake_Logo,
  HomeCake_Cakes,
  HomeCake_Pot,
  HomeCake_Troll,
  HomeCake_SpeechBubble,
  HomeCake_Button,
} from "./home_Cake/index";

export const Home_Cake = () => {
  const [showPage, setShowPage] = useState(false);
  const [phase, setPhase] = useState(1);
  const [checkDetail, setCheckDetail] = useState({});

  const { page, setPage } = useHome();

  const checkDetailLength = Object.keys(checkDetail).length;
  const showButton = page === "cakeDetail" && checkDetailLength === 3;

  useEffect(() => {
    setTimeout(() => setShowPage(true), 10);
  }, []);

  const handleNext = () => {
    setPhase(null);
    setTimeout(() => setPage("cakeFinal"), 400);
  };

  return (
    <Container $show={showPage}>
      <HomeCake_Logo page={page} />
      <HomeCake_Status page={page} />
      <HomeCake_Cakes page={page} />
      <HomeCake_Pot page={page} phase={phase} />
      <HomeCake_Troll page={page} />
      <HomeCake_SpeechBubble
        page={page}
        phase={phase}
        setPage={setPage}
        setPhase={setPhase}
        setCheckDetail={setCheckDetail}
      />
      <HomeCake_Button
        page={page}
        setPage={setPage}
        setPhase={setPhase}
        setShowPage={setShowPage}
      />
      {showButton && (
        <Home_ButtonNext showButton={showButton} handleNext={handleNext} />
      )}
    </Container>
  );
};
