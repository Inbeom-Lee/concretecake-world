import React from "react";
import { Bush3, Raspberry } from "../models";

export const TravelBerry_RaspBerry = ({ zBase }) => {
  const zBaseRasp = zBase - 7;
  const xBase = 3;
  const yBase = -0.8;

  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Bush3 position={[xBase, yBase, zBaseRasp]} scale="0.7" />
      <Raspberry
        position={[xBase + 0.5, yBase + 1.6, zBaseRasp + 0.5]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase + 0.1, yBase + 1.3, zBaseRasp + 0.75]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase + 0.7, yBase + 1.2, zBaseRasp + 0.1]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase + 0.5, yBase + 0.9, zBaseRasp + 0.5]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase, yBase + 0.6, zBaseRasp + 0.8]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase + 0.7, yBase + 0.7, zBaseRasp - 0.1]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
      <Raspberry
        position={[xBase + 0.5, yBase + 0.4, zBaseRasp + 0.7]}
        rotation={[0, 0, angleToRadians(0)]}
        scale="0.09"
      />
    </>
  );
};
