import React from "react";
import { Bush3, Blackberry } from "../models";

export const TravelBerry_BlackBerry = ({ zBase }) => {
  const zBaseBlack = zBase - 13;
  const xBase = 7.5;
  const yBase = -1.2;

  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Bush3 position={[xBase, yBase, zBaseBlack]} scale="0.7" />
      <Blackberry
        position={[xBase, yBase + 2, zBaseBlack + 0.5]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.25"
      />
      <Blackberry
        position={[xBase - 0.3, yBase + 1.55, zBaseBlack + 0.6]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.24"
      />
      <Blackberry
        position={[xBase + 0.4, yBase + 1.5, zBaseBlack + 0.65]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.22"
      />
      <Blackberry
        position={[xBase, yBase + 1.1, zBaseBlack + 0.65]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.25"
      />
      <Blackberry
        position={[xBase - 0.3, yBase + 0.75, zBaseBlack + 0.65]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.24"
      />
      <Blackberry
        position={[xBase + 0.4, yBase + 0.8, zBaseBlack + 0.7]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.22"
      />
      <Blackberry
        position={[xBase + 0.1, yBase + 0.5, zBaseBlack + 0.75]}
        rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
        scale="0.22"
      />
    </>
  );
};
