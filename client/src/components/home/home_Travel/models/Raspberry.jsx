import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import model from "Assets/models/raspberry2-transformed.glb";

export function Raspberry(props) {
  const { nodes, materials } = useGLTF(model);
  const { scroll } = useScroll();

  materials["Material.001"].transparent = true;
  materials["Material.001"].transparent = true;
  materials["Material.001"].transparent = true;

  useFrame(() => {
    const point = 0.16;
    const scrollY = scroll.current;
    const calcOpacity = scrollY < point ? 1 : 1 - (scrollY - point) * 80;

    materials["Material.001"].opacity = calcOpacity;
    materials["Material.001"].opacity = calcOpacity;
    materials["Material.001"].opacity = calcOpacity;
  });

  return (
    <group {...props} dispose={null}>
      <instancedMesh
        args={[nodes.Sphere075.geometry, materials["Material.001"], 66]}
        instanceMatrix={nodes.Sphere075.instanceMatrix}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(model);
