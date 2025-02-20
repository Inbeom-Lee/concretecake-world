import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import model from "Assets/models/honey2-transformed.glb";

export function Honey2(props) {
  const { nodes } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} scale={[1.19, 1, 1]} castShadow>
        <meshPhysicalMaterial
          color={new THREE.Color("#ffcc00")}
          metalness={0}
          roughness={0}
          transmission={0.8}
          thickness={0.3}
          clearcoat={0}
          clearcoatRoughness={0}
          attenuationDistance={1}
          attenuationColor={new THREE.Color("#ffdd55")}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(model);
