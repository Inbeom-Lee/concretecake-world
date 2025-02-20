import { useState, useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Vector3, Quaternion } from "three";
import gsap from "gsap";
import { useMediaQuery } from "Hooks";

export const TravelCanvas_Camera = () => {
  const [initialEntry, setInitialEntry] = useState(false);

  const { camera } = useThree();
  const { scroll } = useScroll();
  const refLookAt = useRef({ Y: 0 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialX = 0;
  const initialY = isMobile ? 2.5 : 1.6;
  const initialZ = isMobile ? 12 : 10;

  // Initial entry camera animation
  useEffect(() => {
    const lookAtStart = new Vector3(0, 0, 0);
    const targetPosition = { x: initialX, y: initialY, z: initialZ };
    const lookAtEnd = new Vector3(0, 0, -500);

    // test
    //-----berry
    // const targetPosition = { x: 4.925, y: 1.6, z: -16.5 };
    // const targetPosition = { x: 4.925, y: 1.6, z: -23.5 };
    // const lookAtEnd = new Vector3(0, 0, -1000);
    //-----honey
    // const targetPosition = { x: 4.925, y: 1, z: -41 };
    // const lookAtEnd = new Vector3(-285, 0, -1000);

    const tl = gsap.timeline();
    const lookAtObj = { t: 0 };
    // const duration = 2.5;
    const duration = 0;

    tl.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration,
      ease: "power3.inOut",
    }).to(
      lookAtObj,
      {
        t: 1,
        duration,
        ease: "power4.in",
        onUpdate: () => {
          const targetLookAt = new Vector3().lerpVectors(
            lookAtStart,
            lookAtEnd,
            lookAtObj.t
          );
          camera.lookAt(targetLookAt);
        },
      },
      0
    );

    tl.eventCallback("onComplete", () => {
      setInitialEntry(true);
    });
  }, [camera]);

  useFrame((state, delta, xrFrame) => {
    if (!initialEntry) return;

    const scrollY = scroll.current;

    //---------- Points ----------//
    const pineEntry = 0.039;
    const pineToBerry = 0.116;
    const berryFirst = 0.154;
    const berrySecond = 0.177;
    const berryToHoney = 0.195;
    const honeyFirst = 0.25;
    const honeySecond = 0.28;

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

    const angleInitial = 5;
    const speedZ_Initial = speedZ * getCosine(angleInitial);
    const speedX_Initial = speedZ * getSine(angleInitial);

    const anglePine = 15;
    const speedZ_Pine = speedZ * getCosine(anglePine);
    const speedX_Pine = speedZ * getSine(anglePine);

    const anglePineToBerry = -5;
    const speedZ_PineToBerry = speedZ * getCosine(anglePineToBerry);
    const speedX_PineToBerry = speedZ * getSine(anglePineToBerry);

    const angleBerry1 = 15;
    const speedZ_Berry1 = speedZ * getCosine(angleBerry1);
    const speedX_Berry1 = speedZ * getSine(angleBerry1);

    const angleBerry2 = 0;
    const speedZ_Berry2 = speedZ * getCosine(angleBerry2);
    const speedX_Berry2 = speedZ * getSine(angleBerry2);

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
      berryToHoney * (speedZ_Berry1 - speedZ_BerryToHoney) + diffZ_Berry1;
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
    // pine to berry
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

    const updateLookAt = () => {
      // helpers
      const getProgress = (start, end, stiffness = 1) => {
        const normalizedProgress = (scrollY - start) / (end - start);
        const t = Math.max(0, Math.min(1, normalizedProgress));
        return Math.pow(t, stiffness);
      };

      const getLookX = (angle) => Math.tan(angle * (Math.PI / 180)) * valueT;

      // targets
      const valueT = 1000;
      const targetInitial = new Vector3(0, 0, -valueT);

      const xPine = getLookX(anglePine);
      const targetPine = new Vector3(xPine, 0, -valueT);

      const xBerry1 = getLookX(anglePineToBerry);
      const targetBerry1 = new Vector3(xBerry1, 0, -valueT);

      const xBerry2 = getLookX(angleBerry1);
      const targetBerry2 = new Vector3(xBerry2, 0, -valueT);

      const xHoney = getLookX(angleBerryToHoney);
      const targetHoney = new Vector3(xHoney, 0, -valueT);

      const xhoneyFirst = getLookX(angleHoney1);
      const targethoneyFirst = new Vector3(xhoneyFirst, 0, -valueT);

      // initial
      if (scrollY < pineEntry) {
        camera.lookAt(targetInitial);
      }
      // Pine
      if (scrollY >= pineEntry && scrollY < pineToBerry) {
        const progress = getProgress(pineEntry, pineToBerry);
        const targetLookAt = new Vector3().lerpVectors(
          targetInitial,
          targetPine,
          progress
        );

        camera.lookAt(targetLookAt);
      }

      // Berry1
      if (scrollY >= pineToBerry && scrollY < berryFirst) {
        const progress = getProgress(pineToBerry, berryFirst);
        const targetLookAt = new Vector3().lerpVectors(
          targetPine,
          targetBerry1,
          progress
        );

        camera.lookAt(targetLookAt);
      }

      // Berry2
      if (scrollY >= berryFirst && scrollY < berryToHoney) {
        const progress = getProgress(berryFirst, berryToHoney);
        const targetLookAt = new Vector3().lerpVectors(
          targetBerry1,
          targetBerry2,
          progress
        );

        camera.lookAt(targetLookAt);
      }

      // Honey
      if (scrollY >= berryToHoney && scrollY < honeyFirst) {
        const progress = getProgress(berryToHoney, honeyFirst);
        const targetLookAt = new Vector3().lerpVectors(
          targetBerry2,
          targetHoney,
          progress
        );

        camera.lookAt(targetLookAt);
      }

      // honeyFirst
      if (scrollY >= honeyFirst) {
        const progress = getProgress(honeyFirst, honeyFirst + 0.05);
        const targetLookAt = new Vector3().lerpVectors(
          targetHoney,
          targethoneyFirst,
          progress
        );

        camera.lookAt(targetLookAt);
      }

      // console.log(
      //   scrollY.toFixed(3),
      //   amountX.toFixed(3),
      //   amountZ.toFixed(3),
      //   amountY.toFixed(3)
      // );
    };

    //---------- Animation ----------//
    const tl = gsap.timeline();

    tl.to(camera.position, {
      x: initialX + amountX,
      y: initialY - amountY,
      z: initialZ - amountZ,
      duration: 0.2,
      ease: "power1.inOut",
    });
    // .to(camera.rotation, {
    //   x: 0,
    //   y: 0,
    //   z: 0,
    //   duration: 0.1,
    //   ease: "power1.inOut",
    // })
    // .to(refLookAt.current, {
    //   Y: scrollY,
    //   duration: 0.15,
    //   ease: "power4.in",
    //   onUpdate: updateLookAt,
    // });
  });

  return null;
};
