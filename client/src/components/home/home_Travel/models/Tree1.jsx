import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/tree1-transformed.glb";

export function Tree1(props) {
  const { nodes, materials } = useGLTF(model);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.wood.geometry}
        material={materials.treeWood2}
        position={[0, -0.075, 0]}
        scale={[0.203, 0.414, 0.203]}
        castShadow
      />
      <mesh
        geometry={nodes.leaf.geometry}
        material={materials.treeLeaf}
        position={[0, 2.054, 0]}
        scale={0.602}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
