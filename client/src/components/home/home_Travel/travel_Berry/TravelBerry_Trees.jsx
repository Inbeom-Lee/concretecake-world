import React from "react";
import { Tree3 } from "../models";

export const TravelBerry_Trees = ({ zBase }) => {
  const yTree = -0.2;

  const getP = (x, z, y) => [x, yTree - (y || 0), zBase - (z || 0)];

  return (
    <>
      <Tree position={getP(-3, -2, 0.1)} scale={-0.1} />
      <Tree position={getP(0, -0.5, 0)} scale={-0.15} />
      <Tree position={getP(1, -0.5, 0)} scale={-0.1} />
      <Tree position={getP(-7, 10, 0.6)} scale={-0.1} />
      <Tree position={getP(14, 15, 1.1)} scale={0.1} />
      <Tree position={getP(18, 10, 1)} scale={0.3} />
      <Tree position={getP(25, 5, 1)} scale={0.2} />
      <Tree position={getP(25, 0, 0.8)} scale={0.35} />
    </>
  );
};

const Tree = ({ position, scale }) => {
  const scaleBase = 0.5;
  const calcScale = scaleBase + (scale || 0);

  return <Tree3 position={position} scale={calcScale} />;
};
