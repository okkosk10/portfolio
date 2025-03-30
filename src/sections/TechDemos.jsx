// sections/TechDemos.jsx
import { FiArrowRight } from "react-icons/fi";
import demos from "../data/demoList";

export default function TechDemos() {
  return (
    <section id="techdemos" className="py-20 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">기술 기반 구현 예시</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, idx) => (
            <a
              key={idx}
              href={`/demo/${demo.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-6 group"
            >
              {/* 카드 본문 */}
              <div>
                <h3 className="text-xl font-bold text-blue-700">{demo.title}</h3>
                <p className="text-sm text-gray-500 italic mt-1">{demo.stack}</p>

                <div className="mt-4 text-gray-700 text-sm leading-relaxed space-y-2">
                  <p>
                    <span className="font-semibold text-gray-800">간단한 소개:</span> {demo.intro}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">사용 기술:</span> {demo.tech}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">구현 기능:</span> {demo.features}
                  </p>
                </div>
              </div>

              {/* 하단 버튼 */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end items-center gap-2 text-blue-600 text-sm font-medium transition-transform transform group-hover:translate-x-1">
                <span>데모 보러가기</span>
                <FiArrowRight className="text-base" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
