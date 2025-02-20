import React from "react";
import { useGLTF } from "@react-three/drei";
import model from "Assets/models/potWithFire-transformed.glb";

export const PotWithFire = (props) => {
  const { nodes, materials } = useGLTF(model);

  const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -2, -2]}
      scale="1.1"
      rotation={[
        degreesToRadians(10),
        degreesToRadians(0),
        degreesToRadians(0),
      ]}
    >
      <mesh
        geometry={nodes.pot.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 1.147, 0]}
      />
      <instancedMesh
        args={[nodes.Sphere002.geometry, materials.PaletteMaterial001, 37]}
        instanceMatrix={nodes.Sphere002.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder005.geometry, materials.PaletteMaterial001, 10]}
        instanceMatrix={nodes.Cylinder005.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder004.geometry, materials.PaletteMaterial001, 14]}
        instanceMatrix={nodes.Cylinder004.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder006.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Cylinder006.instanceMatrix}
      />
    </group>
  );
};

useGLTF.preload(model);
