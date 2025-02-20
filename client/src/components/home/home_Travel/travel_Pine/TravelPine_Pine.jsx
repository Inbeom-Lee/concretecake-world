import React from "react";
import { TreePine, PineLeaf } from "../models";

export const TravelPine_Pine = ({ zBase }) => {
  const pX = 5.8;
  const pY = 0.4;
  const pZ = zBase - 7.5;
  const scalePine = 0.2;

  const getA = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <TreePine position={[pX, pY, pZ]} scale="1.5" />
      <PineLeaf
        position={[pX - 0.7, 3.2, pZ + 0.9]}
        rotation={[0, 0, getA(-30)]}
        scale={scalePine + 0.02}
      />
      <PineLeaf
        position={[pX + 0.1, 2.8, pZ + 0.9]}
        rotation={[getA(10), 0, getA(-10)]}
        scale={scalePine}
      />
      <PineLeaf
        position={[pX - 0.4, 2.2, pZ + 1]}
        rotation={[getA(-10), 0, getA(10)]}
        scale={scalePine}
      />
      <PineLeaf
        position={[pX + 0, 1.7, pZ + 1.1]}
        rotation={[0, 0, getA(-30)]}
        scale={scalePine}
      />
      <PineLeaf
        position={[pX - 0.5, 1.4, pZ + 0.9]}
        rotation={[0, 0, getA(50)]}
        scale={scalePine + 0.02}
      />
      {/* <PineLeaf
        position={[pX, 1.2, pZ + 1.1]}
        rotation={[0, 0, getA(-50)]}
        scale={scalePine}
        
      /> */}
      {/* <PineLeaf
        position={[pX - 0.5, 0.1, pZ + 0.8]}
        rotation={[0, getA(-20), getA(90)]}
        scale={scalePine}
        
      />
      <PineLeaf
        position={[pX + 0.2, 0.1, pZ + 1]}
        rotation={[0, getA(-40), getA(90)]}
        scale={scalePine}
        
      />
      <PineLeaf
        position={[pX + 0.6, 0.1, pZ + 0.8]}
        rotation={[0, getA(20), getA(70)]}
        scale={scalePine}
        
      /> */}
    </>
  );
};
