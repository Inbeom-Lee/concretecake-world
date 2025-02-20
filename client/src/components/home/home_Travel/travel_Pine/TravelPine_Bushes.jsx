import React from "react";
import { Bush1 } from "../models";

export const TravelPine_Bushes = ({ zBase }) => {
  const yBush = -0.1;

  const getP = (x, z) => [x, yBush, z ? zBase - z : zBase];
  const getA = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Bush position={getP(4.8, 3)} rotation={[0, getA(-30), 0]} />
      <Bush position={getP(1, 2)} />
      <Bush position={getP(-2, 5)}  rotation={[0, getA(30), 0]}/>
      <Bush position={getP(3, 8)} />
    </>
  );
};

const Bush = ({ position, rotation, scale }) => {
  const scaleBase = 0.2;
  const calcScale = scaleBase + (scale || 0);

  return <Bush1 position={position} rotation={rotation} scale={calcScale} />;
};
