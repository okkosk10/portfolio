// src/demo/Simulation/index.jsx

import { useState } from "react";
import SimulationCanvas from "./SimulationCanvas";

export default function Simulation() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 설명 영역 */}
        <section className="text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">4D 시뮬레이션</h1>
          <p className="text-gray-600 leading-relaxed">
            시간 흐름에 따라 구조물이 단계별로 조립되는 4D 시뮬레이션입니다.
            <br />
            React + Three.js를 활용한 구조물 시각화 예시입니다.
          </p>
        </section>

        {/* 컨트롤 버튼 */}
        <section className="flex justify-center gap-4">
          {[0, 1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`px-4 py-2 rounded font-medium text-sm shadow transition ${
                currentStep === step
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-blue-100 text-gray-700"
              }`}
            >
              단계 {step + 1}
            </button>
          ))}
        </section>

        {/* 3D Canvas */}
        <section className="bg-white p-6 rounded-xl shadow-xl">
          <div className="w-full h-[500px]">
            <SimulationCanvas currentStep={currentStep} />
          </div>
        </section>

        {/* 요약 */}
        <section className="text-center text-sm text-gray-500 leading-relaxed mt-4">
          박스는 단계별로 추가되며, 구조물의 공정 흐름을 시뮬레이션하는 데모입니다.
        </section>
      </div>
    </div>
  );
}
