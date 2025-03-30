// App.jsx

// 각 섹션과 네비게이션 바 컴포넌트를 임포트합니다.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
// 전역 스타일을 적용하기 위해 CSS 파일을 임포트합니다.
import "./index.css";

// App 컴포넌트는 전체 페이지의 구조를 정의합니다.
export default function App() {
  return (
    // Tailwind CSS의 sans-serif 폰트를 적용합니다.
    <div className="font-sans">
      {/* 고정된 네비게이션 바를 렌더링합니다. */}
      <Navbar />
      <main className="custom-container">
        {/* 각 섹션 컴포넌트를 순서대로 렌더링합니다. */}
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
