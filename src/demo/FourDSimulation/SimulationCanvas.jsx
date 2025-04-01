import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { glbGroups } from "./glbFiles";
import { a, useSpring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";

// 📌 GLB 사전 로드 (텍스처 경로 포함)
glbGroups.flat().forEach((file) => {
  useGLTF.preload(file.url, true, (loader) => {
    loader.setResourcePath("/"); // ✅ 텍스처 경로 해결
  });
});

// GLB 모델 렌더링 컴포넌트
function GLBModel({ url }) {
  const { scene } = useGLTF(url, true, (loader) => {
    loader.setResourcePath("/"); // ✅ 텍스처 경로 해결
  });
  const [visible, setVisible] = useState(false);

  const spring = useSpring({
    scale: visible ? [1, 1, 1] : [0, 0, 0],
    position: visible ? [0, 0, 0] : [0, -1, 0],
    config: { tension: 120, friction: 14 },
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <a.primitive
      object={scene}
      dispose={null}
      scale={spring.scale}
      position={spring.position}
    />
  );
}

// 카메라 제어 컴포넌트
function CameraController({ step, isAutoCameraEnabled, resetTrigger }) {
  const { camera } = useThree();

  const spring = useSpring({
    to: {
      position: [step * 1.5 + 6, 8, step * 1.5 + 6],
    },
    config: { tension: 80, friction: 20 },
  });

  useFrame(() => {
    if (!isAutoCameraEnabled.current) return;
    const pos = spring.position.get();
    camera.position.set(pos[0], pos[1], pos[2]);
  });

  useEffect(() => {
    isAutoCameraEnabled.current = true;
  }, [resetTrigger]);

  return null;
}

// 메인 시뮬레이션 캔버스
export default function SimulationCanvas({ step, resetTrigger }) {
  const isAutoCameraEnabled = useRef(true);
  const visibleModels = step > 0 ? glbGroups.slice(0, step).flat() : [];

  return (
    <Canvas camera={{ position: [10, 8, 10], fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        onStart={() => {
          isAutoCameraEnabled.current = false;
        }}
      />

      <CameraController
        step={step}
        isAutoCameraEnabled={isAutoCameraEnabled}
        resetTrigger={resetTrigger}
      />

      {/* step만큼만 렌더링 */}
      {visibleModels.map((file, idx) => (
        <GLBModel key={`${file.name}-${idx}`} url={file.url} />
      ))}
    </Canvas>
  );
}
