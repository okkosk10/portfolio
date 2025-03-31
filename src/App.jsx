// App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import TechDemos from "./sections/TechDemos";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import ViewerDemo from "./demo/ViewerDemo"; // 3D Viewer 데모

import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* 메인 포트폴리오 페이지 */}
      <Route
        path="/"
        element={
          <div className="font-sans">
            <Navbar />
            <main className="custom-container">
              <Home />
              <About />
              <Experience />
              <TechDemos />
              <Contact />
            </main>
            <Footer />
          </div>
        }
      />

      {/* 기술 데모: 3D Viewer */}
      <Route path="/demo/3d-viewer" element={<ViewerDemo />} />
    </Routes>
  );
}