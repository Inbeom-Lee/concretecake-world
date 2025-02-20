import { useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Vector3 } from "three";

export const TravelCanvas_Camera2 = () => {
  const { camera } = useThree();
  const { scroll } = useScroll();
  const [initialEntry, setInitialEntry] = useState(false);

  // Initial entry camera setup
  useEffect(() => {
    camera.position.set(0, 1.6, 10);
    camera.lookAt(new Vector3(0, 0, -1000));
    setInitialEntry(true);
  }, [camera]);

  useFrame(() => {
    if (!initialEntry) return;

    const scrollY = scroll.current;

    // Define key points with position and lookAt targets
    const keyPoints = [
      {
        entry: 0,
        exit: 0.04,
        position: new Vector3(0, 1.6, 10),
        // lookAt: new Vector3(0, 0, -1000),
      },
      {
        entry: 0.04,
        exit: 0.14,
        position: new Vector3(5, 1.6, 0),
        // lookAt: new Vector3(5, 0, -1000),
      },
      {
        entry: 0.14,
        exit: 0.2,
        position: new Vector3(10, 1.6, -10),
        // lookAt: new Vector3(10, 0, -1000),
      },
      {
        entry: 0.2,
        exit: 0.283,
        position: new Vector3(15, 1.6, -20),
        // lookAt: new Vector3(15, 0, -1000),
      },
      {
        entry: 0.283,
        exit: 1,
        position: new Vector3(20, 1.6, -30),
        // lookAt: new Vector3(20, 0, -1000),
      },
    ];

    // Find the current key point range
    for (let i = 0; i < keyPoints.length - 1; i++) {
      const current = keyPoints[i];
      const next = keyPoints[i + 1];

      console.log(current.position, scrollY, next.position);

      if (scrollY >= current.entry && scrollY < next.entry) {
        const progress =
          (scrollY - current.entry) / (next.entry - current.entry);

        // Interpolate position and lookAt
        const position = new Vector3().lerpVectors(
          current.position,
          next.position,
          progress
        );
        // const lookAt = new Vector3().lerpVectors(
        //   current.lookAt,
        //   next.lookAt,
        //   progress
        // );

        camera.position.lerp(position, 0.1);
        // camera.lookAt(lookAt);

        break;
      }
    }
  });

  return null;
};
