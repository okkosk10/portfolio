// components/Navbar.jsx

// 네비게이션 바 컴포넌트를 정의합니다.
export default function Navbar() {
  return (
    // 상단에 고정된 네비게이션 바를 생성합니다.
    <nav className="fixed top-0 w-full bg-white shadow z-50 animate-fade-in-down">
      {/* 최대 너비를 설정하고 중앙 정렬된 컨테이너를 생성합니다. */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium text-gray-700">
        {/* 각 섹션으로 스크롤 이동할 수 있는 링크를 생성합니다. */}
        <a href="#home" className="hover:text-blue-500">홈</a>
        <a href="#about" className="hover:text-blue-500">소개</a>
        <a href="#experience" className="hover:text-blue-500">경력</a>
        <a href="#techdemos" className="hover:text-blue-500">기술 기반 예시</a>
        <a href="#contact" className="hover:text-blue-500">연락처</a>
      </div>
    </nav>
  );
}