import ViewerCanvas from "./ViewerCanvas";

export default function ViewerDemo() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">
        <div className="w-full lg:w-2/3 h-full bg-white rounded-xl shadow-xl p-6 flex flex-col">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-blue-700">3D Viewer 데모</h1>
          </div>
          <div className="flex-1">
            <ViewerCanvas />
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center leading-relaxed">
            마우스로 드래그하면 모델을 회전할 수 있고, 휠로 확대 또는 축소할 수 있습니다.
            <br />
            상단 버튼으로 다른 3D 모델을 선택하고 Auto-Rotate와 Wireframe 모드를 켜고 끌 수 있습니다.
          </div>
        </div>

        <div className="w-full lg:w-1/3 h-full overflow-y-auto bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">3D Viewer 시스템</h1>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">사용 기술 스택</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>React 19 + Vite</li>
              <li>Tailwind CSS</li>
              <li>Three.js / React Three Fiber</li>
              <li>Drei Stage, OrbitControls, useGLTF</li>
              <li>GLB 파일 로딩 및 모델 조작</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 pt-2">데모 시나리오</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              이 데모는 브라우저에서 GLB 모델을 로딩하고 직접 조작할 수 있는 3D Viewer 예시입니다.
              사용자는 모델을 회전하거나 확대/축소할 수 있고, 여러 모델을 전환하면서 자동 회전과 와이어프레임 모드를 확인할 수 있습니다.
              모델 추가나 뷰어 옵션 확장이 쉬운 구조로 구성했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
