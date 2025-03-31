// src/demo/ViewerDemo/index.jsx
import { useState } from "react";
import ViewerCanvas from './ViewerCanvas';

export default function ViewerDemo() {
  const [autoRotate, setAutoRotate] = useState(false);
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* 상단 소개 텍스트 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-700">3D Viewer 데모</h1>
          <p className="text-gray-600">
            Three.js 기반으로 구현된 3D 객체 조작 데모입니다.<br />
            마우스를 사용해 모델을 회전하거나 확대/축소할 수 있습니다.
          </p>
        </div>

        {/* 3D Canvas를 감싸는 카드 */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="w-full h-[580px]">
            <ViewerCanvas />
          </div>
        </div>

        {/* 버튼 설명 추가 */}
        <div className="mt-6 text-center text-sm text-gray-500 leading-relaxed">
          마우스를 드래그하면 모델이 회전하고, 휠로 확대 또는 축소할 수 있습니다.<br />
          상단 버튼을 통해 다른 3D 모델을 선택할 수 있으며,<br className="sm:hidden" />
          Auto-Rotate와 Wireframe 모드를 켜거나 끌 수 있습니다.
        </div>  
      </div>
    </div>
  );
}
