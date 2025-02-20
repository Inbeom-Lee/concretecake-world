import React, { useMemo } from "react";
import styled from "styled-components";
import { CatmullRomCurve3, Vector3, Shape } from "three";

export const Travel_Road = () => {
  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  const LINE_NB_POINTS = 500;

  const curve = useMemo(() => {
    return new CatmullRomCurve3(
      [
        // start
        new Vector3(-0.2, -10, -0.02), // start point
        // pine
        new Vector3(1.2, 2, 0.05), // first curve to pine
        new Vector3(5, 14, -0.2), // bridge
        // berry
        new Vector3(4.5, 23, -0.54), // first curve in berry
        new Vector3(5.5, 31, -0.97), // second curve in berry
        new Vector3(1, 43, -1.82), // third curve in berry
        // honey
        new Vector3(0, 55, -3), // curve in honey
        // end
        new Vector3(0, 65, -4.2),
        new Vector3(0, 75, -5.54),
        new Vector3(0, 85, -7.24),
        new Vector3(0, 95, -9.1),
        new Vector3(0, 105, -11.1),
        new Vector3(0, 115, -13.35),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.3);

    return shape;
  }, [curve]);

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[angleToRadians(-90), 0, 0]}
      receiveShadow
    >
      <extrudeGeometry
        args={[
          shape,
          {
            steps: LINE_NB_POINTS,
            bevelEnabled: false,
            extrudePath: curve,
          },
        ]}
      />
      <meshLambertMaterial color="#65a866" />
    </mesh>
  );
};
