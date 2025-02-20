import React from "react";
import {
  TravelHoney_Trees,
  TravelHoney_Bushes,
  TravelHoney_Clouds,
  TravelHoney_Honey,
} from "./travel_Honey/index";

export const Travel_Honey = () => {
  const zBase = -34;

  return (
    <>
      <TravelHoney_Trees zBase={zBase} />
      <TravelHoney_Bushes zBase={zBase} />
      <TravelHoney_Clouds zBase={zBase} />
      <TravelHoney_Honey zBase={zBase} />
    </>
  );
};
