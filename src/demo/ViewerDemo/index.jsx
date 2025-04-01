import ViewerCanvas from './ViewerCanvas';

export default function ViewerDemo() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">
        
        {/* 왼쪽: 3D 뷰어 */}
        <div className="w-full lg:w-2/3 h-full bg-white rounded-xl shadow-xl p-6 flex flex-col">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-blue-700">3D Viewer 데모</h1>
          </div>
          <div className="flex-1">
            <ViewerCanvas />
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center leading-relaxed">
            마우스를 드래그하면 모델이 회전하고, 휠로 확대 또는 축소할 수 있습니다.<br />
            상단 버튼을 통해 다른 3D 모델을 선택할 수 있으며,<br className="sm:hidden" />
            Auto-Rotate와 Wireframe 모드를 켜거나 끌 수 있습니다.
          </div>
        </div>

        {/* 오른쪽: 기술 스택 & 시나리오 설명 */}
        <div className="w-full lg:w-1/3 h-full overflow-y-auto bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">3D 뷰어 시스템</h1>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">🛠️ 사용 기술 스택</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>React 19 + Vite</li>
              <li>TailwindCSS</li>
              <li>Three.js (@react-three/fiber)</li>
              <li>@react-three/drei – OrbitControls, useGLTF 등</li>
              <li>GLB 파일 로딩 및 조작 지원</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 pt-2">📦 데모 시나리오</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              이 데모는 Three.js를 활용하여 3D 모델을 로딩하고, 사용자가 직접 회전/확대/축소 등 조작할 수 있도록 구성되었습니다.
              Auto-Rotate, Wireframe 모드와 같은 시각 설정 버튼도 제공되며, 다양한 GLB 모델을 자유롭게 로드하여 확인할 수 있습니다.
              향후 모델 변경, 라이트/재질 효과 등 확장이 용이하도록 설계되어 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
