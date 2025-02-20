import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/cloud1-transformed.glb";

export function Cloud1(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere040.geometry}
        material={materials.cloud}
        position={[0, 1.17, 0]}
        scale={[1, 0.865, 1]}
      />
    </group>
  );
}

useGLTF.preload(model);
