export default function Projects() {
    return (
      <section id="projects" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">프로젝트</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">하이닉스 3D Viewer</h3>
              <p className="mt-2 text-gray-700">
                React와 WebGL을 기반으로 한 3D 플랫폼 구축. 4D 시뮬레이션 및 Viewer 고도화 개발.
              </p>
            </div>
  
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">KT Digital Twin</h3>
              <p className="mt-2 text-gray-700">
                대구 상하수도 시설을 위한 디지털 트윈 플랫폼 개발. Web 3D 엔진을 통한 시각화 구현.
              </p>
            </div>
  
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">현대제철 유해화학물질 관리</h3>
              <p className="mt-2 text-gray-700">
                파노라마 기반 UI로 유해 화학물질 시각화. 법규 기반의 위험물 관리 시스템 구축.
              </p>
            </div>
  
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">사내 자동화 도면 프로젝트</h3>
              <p className="mt-2 text-gray-700">
                내부 전산화 프로젝트로 자동화 도면 시스템 개발 지원.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }