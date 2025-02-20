import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/bush2-transformed.glb";

export function Bush2(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere031.geometry}
        material={materials.treeLeaf}
        position={[0.032, 0.229, 0]}
        scale={1.066}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
