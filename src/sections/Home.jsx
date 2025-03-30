export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        전양근 포트폴리오
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        React & 3D Viewer 기반 프론트엔드 개발자
      </p>
    </section>
  );
}