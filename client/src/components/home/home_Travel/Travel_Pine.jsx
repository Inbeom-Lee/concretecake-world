import React from "react";
import {
  TravelPine_Trees,
  TravelPine_Bushes,
  TravelPine_Clouds,
  TravelPine_Pine,
  TravelPine_Leaf,
} from "./travel_Pine/index";

export const Travel_Pine = () => {
  const zBase = -3.2;

  return (
    <>
      <TravelPine_Pine zBase={zBase} />
      <TravelPine_Leaf zBase={zBase} />
      <TravelPine_Trees zBase={zBase} />
      <TravelPine_Bushes zBase={zBase} />
      <TravelPine_Clouds zBase={zBase} />
    </>
  );
};
