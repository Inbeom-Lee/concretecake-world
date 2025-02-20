import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/bush1-transformed.glb";

export function Bush1(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere019.geometry}
        material={materials.treeLeaf}
        position={[-0.606, 0.229, 0]}
        scale={1.066}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
