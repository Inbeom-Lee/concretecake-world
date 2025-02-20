import React from "react";
import { Bush1 } from "../models";

export const TravelIntro_Bushes = ({ zBase }) => {
  const yBush = -0.1;

  const getP = (x, z) => [x, yBush, z ? zBase - z : zBase];

  return (
    <>
      <Bush position={getP(-3, 2.5)} scale={0.1} />
      <Bush position={getP(-10, 9)} scale={0} />
      <Bush position={getP(2, 1.5)} scale={0} />
      <Bush position={getP(7, 7)} scale={0.1} />
    </>
  );
};

const Bush = ({ position, scale }) => {
  const scaleBase = 0.2;
  const calcScale = scaleBase + (scale || 0);

  return <Bush1 position={position} scale={calcScale} />;
};
