/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 troll.glb --transform 
Files: troll.glb [39.96MB] > /Users/inbeom/dev/devWeb/concretecake/src/assets/models/troll-transformed.glb [2.59MB] (94%)
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/troll-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-12.599, 1.405, 0]}>
          <primitive object={nodes.Spine} />
          <primitive object={nodes.PelvisL} />
          <primitive object={nodes.PelvisR} />
          <skinnedMesh name="body" geometry={nodes.body.geometry} material={materials.skin3} skeleton={nodes.body.skeleton} />
          <skinnedMesh name="clothes" geometry={nodes.clothes.geometry} material={materials.clothes3} skeleton={nodes.clothes.skeleton} />
          <skinnedMesh name="eye" geometry={nodes.eye.geometry} material={materials.eye2} skeleton={nodes.eye.skeleton} />
          <skinnedMesh name="hat" geometry={nodes.hat.geometry} material={materials.hat_red2} skeleton={nodes.hat.skeleton} />
          <skinnedMesh name="head" geometry={nodes.head.geometry} material={materials.skin3} skeleton={nodes.head.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/troll-transformed.glb')
