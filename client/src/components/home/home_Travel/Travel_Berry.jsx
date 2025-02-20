import React from "react";
import {
  TravelBerry_Trees,
  TravelBerry_Bushes,
  TravelBerry_Clouds,
  TravelBerry_RaspBerry,
  TravelBerry_BlackBerry,
  TravelBerry_BlueBerry,
} from "./travel_Berry/index";

export const Travel_Berry = () => {
  const zBase = -20;

  return (
    <>
      <TravelBerry_Trees zBase={zBase} />
      <TravelBerry_Bushes zBase={zBase} />
      <TravelBerry_Clouds zBase={zBase} />
      <TravelBerry_RaspBerry zBase={zBase} />
      <TravelBerry_BlackBerry zBase={zBase} />
      <TravelBerry_BlueBerry zBase={zBase} />
    </>
  );
};
