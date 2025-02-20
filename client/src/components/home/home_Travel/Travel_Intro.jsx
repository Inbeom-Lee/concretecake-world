import React from "react";
import {
  TravelIntro_Trees,
  TravelIntro_Bushes,
  TravelIntro_Clouds,
} from "./travel_Intro/index";

export const Travel_Intro = () => {
  const zBase = 9.2;

  return (
    <>
      <TravelIntro_Trees zBase={zBase} />
      <TravelIntro_Bushes zBase={zBase} />
      <TravelIntro_Clouds zBase={zBase} />
    </>
  );
};
