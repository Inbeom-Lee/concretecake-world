import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/cloud2-transformed.glb";

export function Cloud2(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cloud.geometry}
        material={materials.cloud}
        position={[0.02, 0.953, 0]}
        rotation={[0, 0, -1.532]}
        scale={0.602}
      />
    </group>
  );
}

useGLTF.preload(model);
