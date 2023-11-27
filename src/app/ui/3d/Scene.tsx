// Add TypeScript types to your code
"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Object3D } from "three"; // Import Object3D type

interface RotatingModelProps {
  model: Object3D;
}

function RotatingModel({ model }: RotatingModelProps) {
  const meshRef = useRef<Object3D>(null); // Set useRef type to Object3D

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the model
      // meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.x = Math.PI / 4;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={meshRef} object={model} />;
}

function Scene() {
  const gltf = useLoader(GLTFLoader, "/models/demoDrone.glb");

  if (!gltf) {
    // Handle case where gltf is not yet loaded
    return null;
  }

  gltf.scene.scale.set(18, 18, 18);

  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <RotatingModel model={gltf.scene} />
        <Environment preset='sunset' />
      </Suspense>
    </Canvas>
  );
}

export default Scene;
