import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { useEffect, useState } from "react";
import helmetModel from "./assets/helmet.glb";
import avocadoModel from "./assets/avocado.glb";
import duckModel from "./assets/duck.glb";

const modelMap = {
  helmet: {
    url: helmetModel,
    scale: 1.2,
    position: [0, -0.5, 0],
    camera: [0, 1.5, 4],
  },
  avocado: {
    url: avocadoModel,
    scale: 12,
    position: [0, -0.5, 0],
    camera: [0, 2, 5],
  },
  duck: {
    url: duckModel,
    scale: 1,
    position: [0, -1, 0],
    camera: [0, 2, 6],
  },
};

function DynamicModel({ model, wireframe, onLoad }) {
  const { scene } = useGLTF(model.url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
      }
    });
    onLoad?.();
  }, [scene, wireframe, onLoad]);

  return (
    <primitive
      object={scene}
      dispose={null}
      scale={model.scale}
      position={model.position}
    />
  );
}

export default function ViewerCanvas() {
  const [currentModel, setCurrentModel] = useState("helmet");
  const [autoRotate, setAutoRotate] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const model = modelMap[currentModel];
  const [x, y, z] = model.camera;

  useEffect(() => {
    setIsLoading(true);
  }, [currentModel]);

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg">

      {/* ✅ 모델 선택 버튼 */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded shadow animate-fade-in-down">
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm font-medium text-gray-700">모델 선택:</span>
        </div>
        {Object.keys(modelMap).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentModel(key)}
            className={`px-3 py-1 text-sm rounded-full font-medium transition ${
              currentModel === key
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ 컨트롤 버튼 (반응형) */}
      <div
        className={`
          absolute z-10 flex gap-2 rounded shadow animate-fade-in-down text-sm font-medium bg-white/80 backdrop-blur
          px-3 py-1 sm:px-4 sm:py-2
          sm:top-4 sm:right-4
          top-auto bottom-4 left-1/2 transform -translate-x-1/2
          sm:left-auto sm:bottom-auto sm:transform-none
        `}
      >
        <button
            onClick={() => setAutoRotate((prev) => !prev)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full whitespace-nowrap
              ${autoRotate ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}
            `}
          >
            <span>{autoRotate ? "✅" : "⬜"}</span> Auto-Rotate
        </button>
        <button
          onClick={() => setWireframe((prev) => !prev)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full ${
            wireframe ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          <span>{wireframe ? "✅" : "⬜"}</span> Wireframe
        </button>
      </div>

      {/* ✅ 로딩 스피너 */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm text-gray-600 animate-pulse">모델을 불러오는 중입니다...</p>
        </div>
      )}

      {/* ✅ 3D Canvas */}
      <Canvas
        key={currentModel}
        camera={{ position: [x, y, z], fov: 50 }}
        className={isLoading ? "invisible" : "visible"}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <Stage environment="sunset" intensity={0.8}>
          <DynamicModel
            model={model}
            wireframe={wireframe}
            onLoad={() => setIsLoading(false)}
          />
        </Stage>
        <OrbitControls enablePan={false} autoRotate={autoRotate} />
      </Canvas>
    </div>
  );
}
