import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import TechDemos from "./sections/TechDemos";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

import "./index.css";

const ViewerDemo = lazy(() => import("./demo/ViewerDemo"));
const DigitalTwinDemo = lazy(() => import("./demo/DigitalTwin"));
const Simulation4D = lazy(() => import("./demo/FourDSimulation"));
const ApiDemo = lazy(() => import("./demo/ApiDemo"));
const DashboardDemo = lazy(() => import("./demo/DashboardDemo"));

function DemoRoute({ children }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600">
          Loading demo...
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
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
      <Route path="/demo/3d-viewer" element={<DemoRoute><ViewerDemo /></DemoRoute>} />
      <Route path="/demo/digital-twin" element={<DemoRoute><DigitalTwinDemo /></DemoRoute>} />
      <Route path="/demo/4d-simulation" element={<DemoRoute><Simulation4D /></DemoRoute>} />
      <Route path="/demo/api-integration" element={<DemoRoute><ApiDemo /></DemoRoute>} />
      <Route path="/demo/dashboard" element={<DemoRoute><DashboardDemo /></DemoRoute>} />
    </Routes>
  );
}
