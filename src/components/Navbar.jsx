export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="container mx-auto px-4 py-4 flex gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-500">홈</a>
          <a href="#about" className="hover:text-blue-500">소개</a>
          <a href="#projects" className="hover:text-blue-500">프로젝트</a>
          <a href="#contact" className="hover:text-blue-500">연락처</a>
        </div>
      </nav>
    );
  }