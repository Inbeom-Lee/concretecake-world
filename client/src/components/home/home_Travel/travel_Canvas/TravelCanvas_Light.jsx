import React from "react";

export const TravelCanvas_Light = () => {
  return (
    <>
      <ambientLight intensity={3.5} />
      {/* <directionalLight position={[10, 10, 5]} intensity={1.5} /> */}
      {/* <hemisphereLight
    skyColor={"red"}
    groundColor={"blue"}
    intensity={1}
  /> */}
      <directionalLight
        castShadow
        // color="#fff"
        position={[0, 10, 0]}
        intensity={4}
        shadow-mapSize-width={2000}
        shadow-mapSize-height={2000}
        shadow-camera-near={0.1}
        shadow-camera-far={500}
        shadow-camera-left={-150}
        shadow-camera-right={150}
        shadow-camera-top={150}
        shadow-camera-bottom={-150}
      />
      {/* <directionalLight
        color="#fff"
        position={[1, 100, 10]}
        intensity={2}
        castShadow
      /> */}

      {/* <directionalLight
        color="#fff"
        position={[-10, 10, 5]}
        intensity={1}
        castShadow
      /> */}
    </>
  );
};
