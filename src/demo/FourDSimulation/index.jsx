// src/demo/FourDSimulation/index.jsx
import { useState } from "react";
import SimulationCanvas from "./SimulationCanvas";

export default function FourDSimulation() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center">4D 시뮬레이션</h1>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="w-full h-[600px]">
            <SimulationCanvas step={step} />
          </div>
        </div>

        <div className="text-center">
          <input
            type="range"
            min={1}
            max={3}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full sm:w-1/2"
          />
          <p className="text-sm mt-2 text-gray-600">현재 단계: {step}</p>
        </div>
      </div>
    </div>
  );
}
