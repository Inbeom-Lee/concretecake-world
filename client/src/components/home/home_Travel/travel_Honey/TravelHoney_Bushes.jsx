import React from "react";
import { Bush2 } from "../models";

export const TravelHoney_Bushes = ({ zBase }) => {
  const yBush = -1.55;

  const getP = (x, z, y) => [x, yBush - (y || 0), z ? zBase - z : zBase];

  return (
    <>
      <Bush position={getP(-3, 5)} scale={-0.1} />
      <Bush position={getP(-2, 11.5, 0.5)} scale={0} />
      <Bush position={getP(9, 9, 0.4)} scale={-0.1} />
      <Bush position={getP(8.5, 8.5, 0.4)} scale={-0.2} />
    </>
  );
};

const Bush = ({ position, scale }) => {
  const scaleBase = 0.4;
  const calcScale = scaleBase + (scale || 0);

  return <Bush2 position={position} scale={calcScale} />;
};
