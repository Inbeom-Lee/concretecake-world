import React, { useMemo } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { ShaderMaterial, Vector3 } from "three";

// Shader definition
const gradientShader = {
  uniforms: {
    colorTop: { value: new Vector3(0.7, 0.5, 1) }, // Light Purple
    colorBottom: { value: new Vector3(0.5, 1, 0.5) }, // Light Green
    // resolution: { value: new Vector3(window.innerWidth, window.innerHeight) },
    maxHeight: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorTop;
    uniform vec3 colorBottom;
    uniform vec2 resolution;
    uniform float maxHeight;
    varying vec2 vUv;
    varying float vHeight;
    void main() {
      float heightFactor = (vHeight + maxHeight) / (2.0 * maxHeight);
      vec3 color = mix(colorBottom, colorTop, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export const Travel_Ground = () => {
  const angleToRadians = (degrees) => degrees * (Math.PI / 180);

  return (
    <>
      <mesh
        position={[0, -500, 0]}
        // rotation={[angleToRadians(-90), 0, 0]}
        receiveShadow
      >
        {/* <planeGeometry args={[1000, 1000]} /> */}
        {/* <sphereGeometry args={[500, 500, 500]} /> */}
        <sphereGeometry args={[500, 500, 500, 0, Math.PI * 2, 0, 0.5]} />

        <meshLambertMaterial color="#3F8340" />
      </mesh>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;
