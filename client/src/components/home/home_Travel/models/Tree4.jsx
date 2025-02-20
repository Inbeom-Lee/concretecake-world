import React from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/tree4-transformed.glb";

export function Tree4(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.069, 0]} scale={[0.337, 0.747, 0.337]}>
        <mesh
          geometry={nodes.Cylinder077.geometry}
          material={materials["treeWood2.001"]}
          castShadow
        />
        <mesh
          geometry={nodes.Cylinder077_1.geometry}
          material={materials["treeLeaf.001"]}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);
