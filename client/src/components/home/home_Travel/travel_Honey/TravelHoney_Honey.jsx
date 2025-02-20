import React from "react";
import { Tree4, Beehive, Honey2 } from "../models";

export const TravelHoney_Honey = ({ zBase }) => {
  const zBaseTree = zBase - 18;
  const xBase = 3;
  const yBase = -2.25;

  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Tree4 position={[xBase, yBase, zBaseTree]} scale="1.5" />
      <Beehive
        position={[xBase - 1.45, yBase + 1.6, zBaseTree + 2.4]}
        rotation={[angleToRadians(0), angleToRadians(240), angleToRadians(0)]}
        scale="0.5"
      />
      <Honey2
        position={[xBase - 1, yBase - 0.26, zBaseTree + 2.2]}
        rotation={[angleToRadians(0), angleToRadians(90), angleToRadians(0)]}
        scale="0.5"
      />
      {/* <Honey2
        position={[xBase - 1.2, yBase - 0.8, zBaseTree + 1.8]}
        scale="0.3"
      /> */}
    </>
  );
};
