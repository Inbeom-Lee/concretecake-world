import React from "react";
import { Tree2 } from "../models";

export const TravelIntro_Trees = ({ zBase }) => {
  const yTree = 0.1;

  const getP = (x, z) => [x, yTree, z ? zBase - z : zBase];

  return (
    <>
      <Tree position={getP(-3, 1)} scale={0} />
      <Tree position={getP(-10, 12)} scale={0.1} />
      <Tree position={[-18, -0.1, zBase - 15]} scale={0.1} />
      <Tree position={getP(-2, 5)} scale={0.3} />
      <Tree position={getP(-4, 11)} scale={0.2} />
      <Tree position={getP(-10, 20)} scale={0.1} />
      <Tree position={getP(3, 8)} scale={0.2} />
      <Tree position={getP(7, 4)} scale={0} />
      <Tree position={[15, 0, zBase - 15]} scale={0} />
    </>
  );
};

const Tree = ({ position, scale }) => {
  const scaleBase = 0.5;
  const calcScale = scaleBase + (scale || 0);

  return <Tree2 position={position} scale={calcScale} />;
};
