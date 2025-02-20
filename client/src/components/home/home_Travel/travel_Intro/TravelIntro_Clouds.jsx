import React from "react";
import { Cloud1, Cloud2 } from "../models";

export const TravelIntro_Clouds = ({ zBase }) => {
  const calcZ = (z) => zBase - z;

  return (
    <>
      <Cloud1 position={[-11, 6, calcZ(8)]} scale="0.5" />
      <Cloud2 position={[-3.5, 3.5, calcZ(4)]} scale="0.55" />
      <Cloud1 position={[-2, 5, calcZ(8)]} scale="0.4" />
      <Cloud2 position={[3, 6, calcZ(6)]} scale="0.45" />
      <Cloud1 position={[12, 6, calcZ(10)]} scale="0.5" />
    </>
  );
};
