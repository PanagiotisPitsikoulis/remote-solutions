// CubeModel.tsx
import React, { useRef } from "react";
import * as THREE from "three";

interface CubeModelProps {}

const CubeModel: React.FC<CubeModelProps> = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);

  // Create and add the cube to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cubeRef.current = new THREE.Mesh(geometry, material);

  return null; // This component doesn't render anything in the DOM
};

export default CubeModel;
