import { useState, useRef, useEffect } from "react";
import SimulationCanvas from "./SimulationCanvas";
import { glbGroups } from "./glbFiles";

// 날짜 생성 (10일 간격)
function generateDateSteps(startDateStr, count) {
  const start = new Date(startDateStr);
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(start);
    date.setDate(start.getDate() + i * 10);
    return date.toISOString().split("T")[0];
  });
}

export default function FourDSimulation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  const intervalRef = useRef(null);

  const maxStep = glbGroups.length;
  const stepDates = generateDateSteps("2025-01-01", maxStep);

  // 자동재생
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setStep((prev) => {
          if (prev < maxStep) return prev + 1;
          else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, maxStep]);

  const handlePlayToggle = () => {
    if (step >= maxStep) setStep(0);
    setIsPlaying((prev) => !prev);
  };

  const handleResetCamera = () => {
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">

        {/* 왼쪽: 3D 시뮬레이터 */}
        <div className="w-full lg:w-2/3 h-full bg-white rounded-xl shadow-xl p-4 relative">
          <div className="w-full h-full">
            <SimulationCanvas step={step} resetTrigger={resetTrigger} />
          </div>

          {/* 날짜 HUD */}
          {step > 0 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm shadow">
              {stepDates[step - 1]}
            </div>
          )}
        </div>

        {/* 오른쪽: 정보 패널 */}
        <div className="w-full lg:w-1/3 h-full overflow-y-auto bg-white rounded-xl shadow p-6 space-y-6">

          {/* 타이틀 + 카메라 리셋 */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-700">4D 건축 시뮬레이션</h1>
            <button
              onClick={handleResetCamera}
              className="px-3 py-1.5 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              🔄 카메라 리셋
            </button>
          </div>

          {/* 슬라이더 & 버튼 */}
          <div className="space-y-4">
            <input
              type="range"
              min={0}
              max={maxStep}
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              disabled={isPlaying}
              className="w-full"
            />
            <p className="text-sm text-gray-600 text-center">
              {step === 0 ? "현재 단계: 없음" : `현재 단계: ${step} / ${maxStep}`}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePlayToggle}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {isPlaying ? "⏸ 일시정지" : "▶️ 자동 재생"}
              </button>
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">🛠️ 사용 기술 스택</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>React 19 + Vite</li>
              <li>TailwindCSS</li>
              <li>Three.js (@react-three/fiber)</li>
              <li>@react-three/drei (OrbitControls, useGLTF)</li>
              <li>@react-spring/three – 애니메이션</li>
              <li>GLB 모델: Kenney Modular Buildings</li>
            </ul>
          </div>

          {/* 시나리오 설명 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 pt-2">📽️ 시뮬레이션 시나리오</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              이 시뮬레이션은 건축 공정의 진행 과정을 시각화하기 위한 데모입니다.
              페이지 로딩 시 모든 모델 파일을 사전 로드하여 빠르게 인터랙션할 수 있도록 구성되어 있으며,
              사용자는 슬라이더 또는 자동재생으로 단계별로 모델을 시청할 수 있습니다.
              각 구조물은 fade-in 애니메이션으로 등장하며, 카메라 리셋 버튼을 통해 시점을 다시 조정할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
