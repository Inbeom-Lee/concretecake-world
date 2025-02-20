import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import troll from "Assets/models/troll-transformed.glb";
import * as THREE from "three";

useGLTF.preload(troll);

export const Travel_Troll = ({ play }) => {
  const refTroll = useRef();
  const { nodes, materials, animations } = useGLTF(troll);
  const { actions } = useAnimations(animations, refTroll);
  const { scroll } = useScroll();

  useEffect(() => {
    actions.walking.play();
  }, [play, actions]);

  useFrame((state, delta) => {
    const scrollY = scroll.current;

    //---------- Points ----------//
    const initialX = 0;
    const initialY = 0.28;
    const initialZ = 7;

    const pineEntry = 0.04;
    const pineToBerry = 0.111;
    const berryFirst = 0.156;
    const berrySecond = 0.177;
    const berryToHoney = 0.195;
    const honeyFirst = 0.25;
    const honeySecond = 0.288;

    //---------- Helpers ----------//
    const getCosine = (angleInDegrees) =>
      Math.cos(angleInDegrees * (Math.PI / 180));
    const getSine = (angleInDegrees) =>
      Math.sin(angleInDegrees * (Math.PI / 180));
    const getX = (entry, speed, diff = 0) => (scrollY - entry) * speed + diff;
    const getZ = (speed, diff = 0) => scrollY * speed + diff;
    const getY = (Z) => Math.pow(Z - initialZ, 2) * 0.001;

    //---------- Speed & Angle ----------//
    const speedZ = 200;
    const speedACC = speedZ * 1.03;

    const angleInitial = 6;
    const speedZ_Initial = speedZ * getCosine(angleInitial);
    const speedX_Initial = speedZ * getSine(angleInitial);

    const anglePine = 18;
    const speedZ_Pine = speedZ * getCosine(anglePine);
    const speedX_Pine = speedZ * getSine(anglePine);

    const anglePineToBerry = -5;
    const speedZ_PineToBerry = speedACC * getCosine(anglePineToBerry);
    const speedX_PineToBerry = speedACC * getSine(anglePineToBerry);

    const angleBerry1 = 15;
    const speedZ_Berry1 = speedACC * getCosine(angleBerry1);
    const speedX_Berry1 = speedACC * getSine(angleBerry1);

    const angleBerry2 = 0;
    const speedZ_Berry2 = speedACC * getCosine(angleBerry2);
    const speedX_Berry2 = speedACC * getSine(angleBerry2);

    const angleBerryToHoney = -23;
    const speedZ_BerryToHoney = speedZ * getCosine(angleBerryToHoney);
    const speedX_BerryToHoney = speedZ * getSine(angleBerryToHoney);

    const angleHoney1 = -10;
    const speedZ_Honey1 = speedZ * getCosine(angleHoney1);
    const speedX_Honey1 = speedZ * getSine(angleHoney1);

    const angleHoney2 = 0;
    const speedZ_Honey2 = speedZ * getCosine(angleHoney2);
    const speedX_Honey2 = speedZ * getSine(angleHoney2);

    //---------- Differences ----------//
    // Z
    const diffZ_Pine = pineEntry * (speedZ_Initial - speedZ_Pine);
    const diffZ_PineToBerry =
      pineToBerry * (speedZ_Pine - speedZ_PineToBerry) + diffZ_Pine;
    const diffZ_Berry1 =
      berryFirst * (speedZ_PineToBerry - speedZ_Berry1) + diffZ_PineToBerry;
    const diffZ_Berry2 =
      berrySecond * (speedZ_Berry1 - speedZ_Berry2) + diffZ_Berry1;
    const diffZ_BerryToHoney =
      berryToHoney * (speedZ_Berry2 - speedZ_BerryToHoney) + diffZ_Berry2;
    const diffZ_Honey1 =
      honeyFirst * (speedZ_BerryToHoney - speedZ_Honey1) + diffZ_BerryToHoney;
    const diffZ_Honey2 =
      honeySecond * (speedZ_Honey1 - speedZ_Honey2) + diffZ_Honey1;

    // X
    const diffX_Pine = pineEntry * speedX_Initial;
    const diffX_PineToBerry =
      (pineToBerry - pineEntry) * speedX_Pine + diffX_Pine;
    const diffX_Berry1 =
      (berryFirst - pineToBerry) * speedX_PineToBerry + diffX_PineToBerry;
    const diffX_Berry2 =
      (berrySecond - berryFirst) * speedX_Berry1 + diffX_Berry1;
    const diffX_BerryToHoney =
      (berryToHoney - berrySecond) * speedX_Berry2 + diffX_Berry2;
    const diffX_Honey1 =
      (honeyFirst - berryToHoney) * speedX_BerryToHoney + diffX_BerryToHoney;
    const diffX_Honey2 =
      (honeySecond - honeyFirst) * speedX_Honey1 + diffX_Honey1;

    //---------- Coordinates ----------//
    let amountX = 0;
    let amountY = 0;
    let amountZ = 0;

    // intro
    if (scrollY < pineEntry) {
      const calZ = getZ(speedZ_Initial);
      amountX = getX(0, speedX_Initial);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // pine
    if (scrollY >= pineEntry && scrollY < pineToBerry) {
      const calZ = getZ(speedZ_Pine, diffZ_Pine);
      amountX = getX(pineEntry, speedX_Pine, diffX_Pine);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // pien to berry
    if (scrollY >= pineToBerry && scrollY < berryFirst) {
      const calZ = getZ(speedZ_PineToBerry, diffZ_PineToBerry);
      amountX = getX(pineToBerry, speedX_PineToBerry, diffX_PineToBerry);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // berry 1
    if (scrollY >= berryFirst && scrollY < berrySecond) {
      const calZ = getZ(speedZ_Berry1, diffZ_Berry1);
      amountX = getX(berryFirst, speedX_Berry1, diffX_Berry1);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // berry 2
    if (scrollY >= berrySecond && scrollY < berryToHoney) {
      const calZ = getZ(speedZ_Berry2, diffZ_Berry2);
      amountX = getX(berrySecond, speedX_Berry2, diffX_Berry2);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // berry to honey
    if (scrollY >= berryToHoney && scrollY < honeyFirst) {
      const calZ = getZ(speedZ_BerryToHoney, diffZ_BerryToHoney);
      amountX = getX(berryToHoney, speedX_BerryToHoney, diffX_BerryToHoney);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // honey 1
    if (scrollY >= honeyFirst && scrollY < honeySecond) {
      const calZ = getZ(speedZ_Honey1, diffZ_Honey1);
      amountX = getX(honeyFirst, speedX_Honey1, diffX_Honey1);
      amountY = getY(calZ);
      amountZ = calZ;
    }
    // honey 2
    if (scrollY >= honeySecond) {
      const calZ = getZ(speedZ_Honey2, diffZ_Honey2);
      amountX = getX(honeySecond, speedX_Honey2, diffX_Honey2);
      amountY = getY(calZ);
      amountZ = calZ;
    }

    //---------- Rotation ----------//
    const initialAngle = 180;
    let angleY;

    // intro
    if (scrollY < pineEntry) {
      angleY = initialAngle;
    }
    // pine
    if (scrollY >= pineEntry && scrollY < pineToBerry) {
      angleY = initialAngle - anglePine;
    }
    // pine to berry
    if (scrollY >= pineToBerry && scrollY < berryFirst) {
      angleY = initialAngle - anglePineToBerry;
    }
    // berry 1
    if (scrollY >= berryFirst && scrollY < berrySecond) {
      angleY = initialAngle - angleBerry1;
    }
    // berry 2
    if (scrollY >= berrySecond && scrollY < berryToHoney) {
      angleY = initialAngle - angleBerry2;
    }
    // berry to honey
    if (scrollY >= berryToHoney && scrollY < honeyFirst) {
      angleY = initialAngle - angleBerryToHoney;
    }
    // honey 1
    if (scrollY >= honeyFirst && scrollY < honeySecond) {
      angleY = initialAngle - angleHoney1;
    }
    // honey 1
    if (scrollY >= honeySecond) {
      angleY = initialAngle - angleHoney2;
    }

    //---------- Animation ----------//
    const trollP = refTroll.current?.position;
    const trollR = refTroll.current?.rotation;
    const tl = gsap.timeline();

    const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

    tl.to(trollP, {
      x: initialX + amountX,
      y: initialY - amountY,
      z: initialZ - amountZ,
      duration: 0.2,
      ease: "power1.inOut",
    }).to(trollR, {
      x: 0,
      y: degreesToRadians(angleY),
      z: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    const softenColor = (color, saturation, lightness) => {
      const hsl = new THREE.Color(color).getHSL({ h: 0, s: 0, l: 0 });
      return new THREE.Color().setHSL(
        hsl.h,
        hsl.s * saturation,
        hsl.l * lightness
      );
    };

    materials.skin3.color = softenColor(materials.skin3.color, 0.9, 0.7);
    materials.clothes3.color = softenColor(materials.clothes3.color, 0.6, 0.5);
    materials.eye2.color = softenColor(materials.eye2.color, 0.8, 0.7);
    materials.hat_red2.color = softenColor(materials.hat_red2.color, 0.9, 0.7);

    Object.values(materials).forEach(
      (material) => (material.needsUpdate = true)
    );
  }, [materials]);

  return (
    <group ref={refTroll} dispose={null} scale="0.2">
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Spine} />
          <primitive object={nodes.PelvisL} />
          <primitive object={nodes.PelvisR} />
        </group>
        <skinnedMesh
          name="body"
          geometry={nodes.body.geometry}
          material={materials.skin3}
          skeleton={nodes.body.skeleton}
          castShadow
        />
        <skinnedMesh
          name="clothes"
          geometry={nodes.clothes.geometry}
          material={materials.clothes3}
          skeleton={nodes.clothes.skeleton}
          castShadow
        />
        <skinnedMesh
          name="eye"
          geometry={nodes.eye.geometry}
          material={materials.eye2}
          skeleton={nodes.eye.skeleton}
          castShadow
        />
        <skinnedMesh
          name="hat"
          geometry={nodes.hat.geometry}
          material={materials.hat_red2}
          skeleton={nodes.hat.skeleton}
          castShadow
        />
        <skinnedMesh
          name="head"
          geometry={nodes.head.geometry}
          material={materials.skin3}
          skeleton={nodes.head.skeleton}
          castShadow
        />
      </group>
    </group>
  );
};
