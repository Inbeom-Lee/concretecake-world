import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { TravelCanvas_Camera, TravelCanvas_Light } from "./travel_Canvas/index";

export const Travel_Canvas = ({ children }) => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 20, 10],
        near: 0.1,
        far: 100,
      }}
    >
      <Suspense fallback={null}>
        <TravelCanvas_Light />
        {/* <OrbitControls /> */}
        <ScrollControls
          pages={1000}
          damping={0.1}
          maxSpeed={0.1}
          // distance={1000}
        >
          <TravelCanvas_Camera />
          {children}
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};
