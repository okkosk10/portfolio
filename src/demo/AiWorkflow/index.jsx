import { useMemo, useState } from "react";

const workflowSteps = [
  {
    title: "요구사항 정리",
    badge: "Planning",
    prompt: "피드백 목록 화면에 검색, 정렬, 빈 상태, 오류 상태를 추가해야 합니다.",
    output:
      "기능을 검색/정렬/상태 처리로 분리하고, 우선순위는 사용자 흐름에 직접 영향이 큰 빈 상태와 오류 상태부터 잡습니다.",
    checklist: ["사용자 시나리오 분해", "필수 상태 정의", "우선순위 정리"],
  },
  {
    title: "컴포넌트 설계",
    badge: "Design",
    prompt: "기존 화면이 커져서 유지보수가 어려워지고 있습니다.",
    output:
      "목록, 필터, 상태 메시지, 입력 폼을 독립 컴포넌트로 분리하고 props 흐름을 단순화합니다.",
    checklist: ["역할별 컴포넌트 분리", "props 책임 정리", "재사용 가능 구조 설계"],
  },
  {
    title: "코드 개선",
    badge: "Refactor",
    prompt: "중복된 조건부 렌더링과 API 호출 로직을 정리하고 싶습니다.",
    output:
      "API 호출은 custom hook으로 옮기고, 로딩/오류/빈 데이터 처리는 공통 상태 뷰 컴포넌트로 정리합니다.",
    checklist: ["custom hook 후보 확인", "중복 조건 제거", "상태 UI 일관화"],
  },
  {
    title: "검증 포인트",
    badge: "Review",
    prompt: "수정 후 어떤 부분을 우선 확인해야 할까요?",
    output:
      "검색어 입력, 정렬 변경, API 실패, 빈 데이터, 모바일 화면에서 텍스트 깨짐 여부를 우선 확인합니다.",
    checklist: ["주요 플로우 테스트", "예외 상태 테스트", "반응형 화면 확인"],
  },
];

export default function AiWorkflowDemo() {
  const [selectedStep, setSelectedStep] = useState(0);
  const current = workflowSteps[selectedStep];

  const progress = useMemo(
    () => Math.round(((selectedStep + 1) / workflowSteps.length) * 100),
    [selectedStep]
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <section className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-sm font-semibold text-blue-600">Mock AI Workflow</p>
            <h1 className="text-3xl font-bold text-gray-900">AI 활용 개발 워크플로우</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              실제 API 호출 없이, AI 도구를 개발 과정에 적용하는 흐름을 정리한 데모입니다.
              요구사항 분석부터 리팩토링과 검증까지 단계별로 어떤 보조를 받을 수 있는지 보여줍니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {workflowSteps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setSelectedStep(index)}
                className={`text-left rounded-lg border px-4 py-3 transition ${
                  selectedStep === index
                    ? "border-blue-500 bg-blue-50 text-blue-800"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                }`}
              >
                <span className="block text-xs font-semibold uppercase tracking-wide">
                  {step.badge}
                </span>
                <span className="block mt-1 font-bold">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-gray-900">{current.title}</h2>
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                {progress}% 진행
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">입력 상황</p>
                <p className="rounded-lg bg-white border border-gray-200 p-4 text-sm leading-relaxed">
                  {current.prompt}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">AI 보조 결과</p>
                <p className="rounded-lg bg-white border border-blue-100 p-4 text-sm leading-relaxed text-gray-700">
                  {current.output}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">확인 항목</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  {current.checklist.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-white border border-gray-200 px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <aside className="bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-700">개발 방식 요약</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              AI를 코드 생성 도구로만 사용하지 않고, 요구사항 정리, 구조 검토, 리팩토링
              방향 설정, 테스트 관점 도출에 함께 활용하는 흐름을 표현했습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">사용 기술</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>React 상태 기반 인터랙션</li>
              <li>TailwindCSS UI 구성</li>
              <li>Mock 데이터 기반 AI 응답 시나리오</li>
              <li>API Key 없이 동작하는 공개 데모 구조</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
            <h3 className="text-sm font-bold text-gray-800">운영 리스크 고려</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              공개 포트폴리오에서는 비용과 오남용을 막기 위해 실제 LLM API를 호출하지
              않습니다. 실제 서비스 적용 시에는 서버 측 API, 사용량 제한, 캐시, fallback을
              함께 설계하는 방향을 전제로 합니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
