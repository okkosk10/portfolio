// sections/TechDemos.jsx
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; // 오른쪽 화살표 아이콘

const demos = [
  {
    title: "3D Viewer 연동",
    stack: "Three.js, React",
    description: "웹 기반 3D 모델 로딩 및 회전/확대 기능 구현",
    slug: "3d-viewer",
  },
  {
    title: "디지털 트윈 시각화",
    stack: "React, API, Chart.js",
    description: "센서 상태를 실시간으로 시각화하는 대시보드 구성",
    slug: "digital-twin",
  },
  {
    title: "4D 시뮬레이션",
    stack: "React Three Fiber",
    description: "시간 흐름에 따라 구조물이 순차적으로 등장하는 시뮬레이션",
    slug: "4d-simulation",
  },
  {
    title: "API 연동 예제",
    stack: "Node.js, Express, Axios",
    description: "서버-프론트 간 데이터 통신 및 UI 렌더링",
    slug: "api-integration",
  },
  {
    title: "가상 대시보드 시스템",
    stack: "React, Zustand, Chart.js",
    description: "복잡한 상태를 다루는 실시간 대시보드 구성 예시",
    slug: "dashboard",
  }
];

export default function TechDemos() {
  return (
    <section id="techdemos" className="py-20 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">기술 기반 구현 예시</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, idx) => (
            <Link
              key={idx}
              to={`/demo/${demo.slug}`}
              className="flex flex-col justify-between h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-6 group"
            >
              {/* 상단 설명 영역 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{demo.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{demo.stack}</p>
                <p className="mt-4 text-gray-700">{demo.description}</p>
              </div>

              {/* 하단 버튼 영역 */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end items-center gap-2 text-blue-600 text-sm font-medium transition-transform transform group-hover:translate-x-1">
                <span>데모 보러가기</span>
                <FiArrowRight className="text-base" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
