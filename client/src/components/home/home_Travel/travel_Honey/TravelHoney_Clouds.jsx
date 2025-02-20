import React from "react";
import { Cloud1, Cloud2 } from "../models";

export const TravelHoney_Clouds = ({ zBase }) => {
  const getPZ = (z) => zBase - z;
  const getA = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Cloud2
        position={[-10, 7, getPZ(10)]}
        rotation={[0, getA(20), 0]}
        scale="1.2"
      />
      <Cloud1
        position={[-2, 6, getPZ(15)]}
        rotation={[0, getA(20), 0]}
        scale="2"
      />
      <Cloud2
        position={[9, 5, getPZ(10)]}
        rotation={[0, getA(10), 0]}
        scale="0.4"
      />
    </>
  );
};
