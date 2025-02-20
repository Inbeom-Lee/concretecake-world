import React from "react";
import { Bush2, Blueberry } from "../models";

export const TravelBerry_BlueBerry = ({ zBase }) => {
  const zBaseBlue = zBase - 3;
  const xBase = 6.5;
  const yBase = -0.55;

  return (
    <>
      <Bush2 position={[xBase, yBase, zBaseBlue]} scale="0.4" />
      <Bush2 position={[xBase + 1, yBase, zBaseBlue + 1]} scale="0.5" />
      <Bush2 position={[xBase + 1.5, yBase, zBaseBlue + 2]} scale="0.3" />
      {/* Blueberries bush1 */}
      <Blueberry
        position={[xBase, yBase + 0.95, zBaseBlue + 0.4]}
        scale="0.15"
      />
      <Blueberry
        position={[xBase - 0.4, yBase + 0.6, zBaseBlue + 0.55]}
        scale="0.15"
      />
      <Blueberry
        position={[xBase + 0.1, yBase + 0.5, zBaseBlue + 0.8]}
        scale="0.15"
      />
      {/* Blueberries bush2 */}
      <Blueberry
        position={[xBase + 0.8, yBase + 1.15, zBaseBlue + 1.5]}
        scale="0.13"
      />
      <Blueberry
        position={[xBase + 0.4, yBase + 0.8, zBaseBlue + 1.6]}
        scale="0.15"
      />
      <Blueberry
        position={[xBase + 1.1, yBase + 0.9, zBaseBlue + 1.7]}
        scale="0.15"
      />
      <Blueberry
        position={[xBase + 0.8, yBase + 0.5, zBaseBlue + 1.8]}
        scale="0.15"
      />
      {/* Blueberries bush3 */}
      <Blueberry
        position={[xBase + 1.2, yBase + 0.7, zBaseBlue + 2.3]}
        scale="0.1"
      />
      <Blueberry
        position={[xBase + 1.2, yBase + 0.4, zBaseBlue + 2.5]}
        scale="0.1"
      />
      <Blueberry
        position={[xBase + 1.55, yBase + 0.55, zBaseBlue + 2.5]}
        scale="0.1"
      />
    </>
  );
};
