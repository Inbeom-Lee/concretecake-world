import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/tree3-transformed.glb";

export function Tree3(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.wood002.geometry}
        material={materials.treeWood2}
        position={[0, 0.133, 0]}
        scale={[0.422, 0.541, 0.422]}
        castShadow
      />
      <mesh
        geometry={nodes.Sphere026.geometry}
        material={materials.treeLeaf}
        position={[0, 0.772, 0]}
        scale={[2.125, 1.703, 2.125]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
