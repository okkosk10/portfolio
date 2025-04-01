import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import TechDemos from "./sections/TechDemos";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

import ViewerDemo from "./demo/ViewerDemo";
import DigitalTwinDemo from "./demo/DigitalTwin";
import Simulation4D from "./demo/FourDSimulation";
import ApiDemo from "./demo/ApiDemo";
import DashboardDemo from "./demo/DashboardDemo";

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
      <Route path="/demo/3d-viewer" element={<ViewerDemo />} />
      <Route path="/demo/digital-twin" element={<DigitalTwinDemo />} />
      <Route path="/demo/4d-simulation" element={<Simulation4D />} />
      <Route path="/demo/api-integration" element={<ApiDemo />} />
      <Route path="/demo/dashboard" element={<DashboardDemo />} />
    </Routes>
  );
}
