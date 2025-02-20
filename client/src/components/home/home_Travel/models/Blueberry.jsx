import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/blueberry-transformed.glb";

export function Blueberry(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials.blueberry2.transparent = true;
  materials.blueberry2.transparent = true;
  materials.blueberry2.transparent = true;

  useFrame(() => {
    const point = 0.14;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 150;

    materials.blueberry2.opacity = calcOpacity;
    materials.blueberry2.opacity = calcOpacity;
    materials.blueberry2.opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.blueberry2}
        rotation={[Math.PI, -0.356, Math.PI]}
        scale={[1, 0.8, 1]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
