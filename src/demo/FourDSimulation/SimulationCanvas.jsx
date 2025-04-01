// src/demo/FourDSimulation/SimulationCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { glbGroups } from "./glbFiles";

function GLBModel({ url, visible }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      dispose={null}
      visible={visible}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

export default function SimulationCanvas({ step }) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    // step에 따라 보여줄 그룹 업데이트
    setCurrentGroupIndex(step);
  }, [step]);

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg bg-white">
      <Canvas camera={{ position: [4, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls />

        {/* 현재까지의 그룹만 표시 */}
        {glbGroups.slice(0, currentGroupIndex + 1).flat().map((file, idx) => (
          <GLBModel key={idx} url={file.url} visible={true} />
        ))}
      </Canvas>
    </div>
  );
}
