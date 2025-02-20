import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/leaf-transformed.glb";

export function Leaf(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials.treeLeaf2.transparent = true;

  useFrame(() => {
    const point = 0.066;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 200;

    materials.treeLeaf2.opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.treeLeaf2}
        position={[0.563, 1.749, 0]}
        rotation={[0.625, 1.012, 0]}
        scale={0.674}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
