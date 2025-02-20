import React from "react";
import { Cloud1, Cloud2 } from "../models";

export const TravelBerry_Clouds = ({ zBase }) => {
  const getPZ = (z) => zBase - z;
  const getA = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Cloud2
        position={[-2, 4, getPZ(3)]}
        rotation={[0, getA(20), 0]}
        scale="0.8"
      />
      <Cloud1
        position={[1, 3.5, getPZ(4)]}
        rotation={[0, getA(20), 0]}
        scale="0.35"
      />
      <Cloud2
        position={[6, 5, getPZ(7)]}
        rotation={[0, getA(10), 0]}
        scale="0.45"
      />
      <Cloud1
        position={[13, 5, getPZ(5.2)]}
        rotation={[0, getA(-20), getA(-10)]}
        scale="0.5"
      />
    </>
  );
};
