import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import model from "Assets/models/honey-transformed.glb";

export function Honey(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere133.geometry}
        // material={materials.honey}
        position={[0, 1.496, 0]}
        scale={[0.545, 0.372, 0.545]}
        castShadow
      >
        <meshPhysicalMaterial
          color={new THREE.Color("#ffdd00")}
          metalness={0}
          roughness={0}
          transmission={0.7}
          thickness={1}
          clearcoat={0}
          clearcoatRoughness={0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(model);
