import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/pineLeaf-transformed.glb";

export function PineLeaf(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials.treeWood.transparent = true;
  materials.treeLeaf.transparent = true;

  useFrame(() => {
    const point = 0.085;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 200;

    materials.treeWood.opacity = calcOpacity;
    materials.treeLeaf.opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.stem.geometry}
        material={materials.treeWood}
        position={[0, 0.93, 0]}
        rotation={[0, -0.182, 0]}
        scale={[0.095, 1.511, 0.095]}
        castShadow
      />
      <instancedMesh
        args={[nodes.Cylinder100.geometry, materials.treeLeaf, 37]}
        instanceMatrix={nodes.Cylinder100.instanceMatrix}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
