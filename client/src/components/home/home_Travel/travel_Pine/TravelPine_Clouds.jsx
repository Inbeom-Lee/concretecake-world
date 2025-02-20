import React from "react";
import { Cloud1, Cloud2 } from "../models";

export const TravelPine_Clouds = ({ zBase }) => {
  const getPZ = (z) => zBase - z;
  const getA = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Cloud2 position={[-4, 4, getPZ(5.7)]} scale="0.45" />
      <Cloud1 position={[0, 3, getPZ(5.2)]} scale="0.25" />
      <Cloud2
        position={[6, 5, getPZ(5.7)]}
        rotation={[0, getA(-10), 0]}
        scale="0.45"
      />
      <Cloud1
        position={[8, 3.8, getPZ(5.2)]}
        rotation={[0, getA(-30), getA(-5)]}
        scale="0.25"
      />
    </>
  );
};
