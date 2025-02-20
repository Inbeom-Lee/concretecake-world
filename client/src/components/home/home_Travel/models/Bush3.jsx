import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/bush3-transformed.glb";

export function Bush3(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere035.geometry}
        material={materials.treeLeaf}
        position={[0, 0.518, 0]}
        scale={1.129}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
