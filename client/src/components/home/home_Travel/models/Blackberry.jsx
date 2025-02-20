import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/blackberry-transformed.glb";

export function Blackberry(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials["Material.011"].transparent = true;
  materials["Material.010"].transparent = true;
  materials["Material.005"].transparent = true;

  useFrame(() => {
    const point = 0.192;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 150;

    materials["Material.011"].opacity = calcOpacity;
    materials["Material.010"].opacity = calcOpacity;
    materials["Material.005"].opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <group scale={[0.038, 0.212, 0.038]}>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.011"]}
          castShadow
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.010"]}
          castShadow
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.005"]}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);
