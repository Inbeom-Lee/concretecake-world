import React from "react";
import { Tree4 } from "../models";

export const TravelHoney_Trees = ({ zBase }) => {
  const yTree = -0.45;

  const getP = (x, z, y) => [x, yTree - (y || 0), zBase - (z || 0)];

  return (
    <>
      <Tree position={getP(0, 5, 1)} scale={0} />
      <Tree position={getP(0, 6, 1)} scale={-0.1} />
      <Tree position={getP(-12, 12, 1.5)} scale={0.1} />
      <Tree position={getP(-10, 18, 2.1)} scale={0.2} />
      <Tree position={getP(6, 5, 1)} scale={-0.2} />
      <Tree position={getP(14, 20, 2.2)} scale={0.2} />
      <Tree position={getP(20, 18, 2)} scale={0.3} />
      <Tree position={getP(-6, 28, 3)} scale={0.2} />
      <Tree position={getP(10, 30, 3.5)} scale={0.2} />
    </>
  );
};

const Tree = ({ position, scale }) => {
  const scaleBase = 0.5;
  const calcScale = scaleBase + (scale || 0);

  return <Tree4 position={position} scale={calcScale} />;
};
