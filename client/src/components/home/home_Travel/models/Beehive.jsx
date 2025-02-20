import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/beehive-transformed.glb";

export function Beehive(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials.beehive1.transparent = true;
  materials.heehive2.transparent = true;
  materials["heehive hole"].transparent = true;
  materials.treeWood.transparent = true;

  useFrame(() => {
    const point = 0.26;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 70;

    materials.beehive1.opacity = calcOpacity;
    materials.heehive2.opacity = calcOpacity;
    materials["heehive hole"].opacity = calcOpacity;
    materials.treeWood.opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere039.geometry}
        material={materials.beehive1}
        position={[0, 0.032, 0]}
        scale={[1.107, 0.479, 1.107]}
      />
      <mesh
        geometry={nodes.Torus013.geometry}
        material={materials.heehive2}
        position={[0, 1.654, 0]}
        scale={[0.953, 1, 0.953]}
      />
      <mesh
        geometry={nodes.Cylinder039.geometry}
        material={materials["heehive hole"]}
        position={[0.94, 0.856, -0.932]}
        rotation={[Math.PI / 2, 0, -2.346]}
        scale={[0.145, 0.28, 0.145]}
      />
      <mesh
        geometry={nodes.branch001.geometry}
        material={materials.treeWood}
        position={[-1.863, 3.093, 0]}
        rotation={[0, 0, -1.351]}
        scale={0.145}
      />
    </group>
  );
}

useGLTF.preload(model);
