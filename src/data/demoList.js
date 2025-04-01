// data/demoList.js
const demos = [
    {
      title: "3D Viewer 연동",
      slug: "3d-viewer",
      stack: "React, Three.js, WebGL",
      intro: "WebGL API를 활용하여 3D 객체 렌더링 및 카메라 조작 기능을 구현한 예시입니다.",
      tech: "React, Three.js, WebGL",
      features: "3D 모델 로딩, 씬 구성, OrbitControls 기반 회전/확대/축소 조작"
    },
    {
      title: "디지털 트윈 시각화",
      slug: "digital-twin",
      stack: "React, Axios, Chart.js",
      intro: "외부 Api를 기반으로 상태를 실시간 시각화하는 디지털 트윈 UI 구성 예시입니다.",
      tech: "React, Axios, Chart.js, TailwindCSS",
      features: "외부 API 연동, 실시간 데이터 시각화, 차트 및 상태 모니터링 구성",
    },
    {
      title: "4D 시뮬레이션",
      slug: "4d-simulation",
      stack: "React, R3F, Three.js",
      intro: "시간 흐름에 따라 구조물이 단계별로 등장하는 4D 시뮬레이션 구현 예시입니다.",
      tech: "React, React Three Fiber, Three.js",
      features: "객체별 타임라인 제어, 순차 렌더링, 시뮬레이션 컨트롤 UI 구성"
    },
    {
      title: "API 연동 예제",
      slug: "api-integration",
      stack: "Node.js, Express, React",
      intro: "Node.js 백엔드와 React 프론트엔드 간 RESTful API 연동 예시입니다.",
      tech: "Node.js, Express, React, Axios",
      features: "GET/POST API 처리, 데이터 통신 테스트, 응답 렌더링 처리"
    },
    {
      title: "가상 대시보드 시스템",
      slug: "dashboard",
      stack: "React, Zustand, Chart.js",
      intro: "상태 관리와 퍼포먼스 최적화를 반영한 실시간 UI 기반 대시보드 구성 예시입니다.",
      tech: "React, Zustand, Chart.js, TailwindCSS",
      features: "다중 패널 렌더링, 상태 기반 조건부 UI, 실시간 알림 및 그래프 구성"
    }
  ];
  
  export default demos;