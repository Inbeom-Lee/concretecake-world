import React from "react";
import { Tree2 } from "../models";

export const TravelPine_Trees = ({ zBase }) => {
  const yTree = 0;

  const getP = (x, z, y) => [x, yTree + (y || 0), zBase - (z || 0)];

  return (
    <>
      <Tree position={getP(-0.1, 0.7)} scale={-0.2} />
      <Tree position={getP(2.8)} scale={-0.1} />
      <Tree position={getP(6.5, 4.5)} />
      {/* <Tree position={getP(2, 12, -0.1)} /> */}
      <Tree position={getP(-4, 11)} />
      <Tree position={getP(-7, 10)} />
      <Tree position={getP(16, 11, -0.2)} />
      <Tree position={getP(17, 9, -0.2)} />
    </>
  );
};

const Tree = ({ position, scale }) => {
  const scaleBase = 0.5;
  const calcScale = scaleBase + (scale || 0);

  return <Tree2 position={position} scale={calcScale} />;
};
