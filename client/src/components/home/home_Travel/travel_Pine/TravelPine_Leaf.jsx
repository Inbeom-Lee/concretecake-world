import React from "react";
import { Tree2, Leaf } from "../models";

export const TravelPine_Leaf = ({ zBase }) => {
  const pX = 1.4;
  const pY = 0.2;
  const pZ = zBase - 3.5;
  const scaleLeaf = 0.07;

  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <Tree2 position={[pX, pY, pZ]} scale="0.6" />
      <Leaf
        position={[pX - 0.15, 1.65, pZ + 0.46]}
        rotation={[angleToRadians(20), angleToRadians(20), angleToRadians(0)]}
        scale={scaleLeaf}
      />
      <Leaf
        position={[pX + 0.35, 1.6, pZ + 0.38]}
        rotation={[angleToRadians(-20), angleToRadians(60), angleToRadians(90)]}
        scale={scaleLeaf}
      />
      <Leaf
        position={[pX + 0, 1.25, pZ + 0.52]}
        rotation={[angleToRadians(30), angleToRadians(10), angleToRadians(-10)]}
        scale={scaleLeaf}
      />
      <Leaf
        position={[pX + 0.3, 1, pZ + 0.45]}
        rotation={[angleToRadians(15), angleToRadians(30), angleToRadians(-10)]}
        scale={scaleLeaf}
      />
      <Leaf
        position={[pX - 0.05, 0.9, pZ + 0.47]}
        rotation={[angleToRadians(-30), angleToRadians(35), angleToRadians(90)]}
        scale={scaleLeaf}
      />
      <Leaf
        position={[pX + 0.15, 0.6, pZ + 0.46]}
        rotation={[angleToRadians(25), angleToRadians(10), angleToRadians(0)]}
        scale={scaleLeaf}
      />
      {/* <Leaf
        position={[pX - 0.2, 0.1, pZ + 0.2]}
        rotation={[angleToRadians(-60), angleToRadians(0), angleToRadians(130)]}
        scale={scaleLeaf}
        
      />
      <Leaf
        position={[pX + 0.1, -0.05, pZ + 0.4]}
        rotation={[angleToRadians(0), angleToRadians(30), angleToRadians(-30)]}
        scale={scaleLeaf}
        
      />
      <Leaf
        position={[pX + 0.4, 0.1, pZ]}
        rotation={[angleToRadians(140), angleToRadians(0), angleToRadians(-0)]}
        scale={scaleLeaf}
        
      /> */}
    </>
  );
};
