import React from "react";
import { Bush3 } from "../models";

export const TravelBerry_Bushes = ({ zBase }) => {
  const yBush = -0.5;

  const getP = (x, z, y) => [x, yBush - (y || 0), z ? zBase - z : zBase];

  return (
    <>
      <Bush position={getP(-5, 5, 0.1)} scale={0} />
      <Bush position={getP(0, 12, 0.5)} scale={0} />
      <Bush position={getP(11, 2)} scale={-0.1} />
      <Bush position={getP(12, -3)} scale={0} />
    </>
  );
};

const Bush = ({ position, scale }) => {
  const scaleBase = 0.4;
  const calcScale = scaleBase + (scale || 0);

  return <Bush3 position={position} scale={calcScale} />;
};
