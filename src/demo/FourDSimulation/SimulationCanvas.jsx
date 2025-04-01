// src/demo/SimulationDemo/SimulationCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function SimulationCanvas() {
  const [currentStep, setCurrentStep] = useState(0);

  // 시간 흐름에 따라 단계 증가
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1500); // 1.5초마다 단계 증가

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />

      {/* 기초 (foundation) */}
      {currentStep >= 0 && (
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      )}

      {/* 1층 (frame1) */}
      {currentStep >= 1 && (
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[3.5, 2, 3.5]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      )}

      {/* 2층 (frame2) */}
      {currentStep >= 2 && (
        <mesh position={[0, 4.5, 0]}>
          <boxGeometry args={[3, 2, 3]} />
          <meshStandardMaterial color="lightskyblue" />
        </mesh>
      )}

      {/* 지붕 (roof) */}
      {currentStep >= 3 && (
        <mesh position={[0, 7, 0]}>
          <boxGeometry args={[2.5, 1, 2.5]} />
          <meshStandardMaterial color="steelblue" />
        </mesh>
      )}
    </Canvas>
  );
}
