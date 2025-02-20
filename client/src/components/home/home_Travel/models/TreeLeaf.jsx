import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/treeLeaf-transformed.glb";

export function TreeLeaf(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.wood001.geometry}
        material={materials.treeWood2}
        position={[0, -0.075, 0]}
        scale={[0.203, 0.414, 0.203]}
        castShadow
      />
      <mesh
        geometry={nodes.Sphere018.geometry}
        material={materials.treeLeaf2}
        position={[0, 1.141, 0]}
        scale={0.874}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
