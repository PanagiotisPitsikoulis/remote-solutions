"use client";
import React, { useRef, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();

  const { scene } = useGLTF("/models/demoDrone.glb");

  return (
    <Canvas>
      <group ref={group} {...props} dispose={null}>
        {/* Adjust the rotation and scale based on your model */}
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.015}>
          {/* Adjust the rotation and scale based on your model */}
          <group rotation={[Math.PI / 2, 0, 0]} scale={100}>
            {/* Add your model to the scene */}
            <primitive object={scene} />
          </group>
        </group>
      </group>
    </Canvas>
  );
}
