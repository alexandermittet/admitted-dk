import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FluidCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";
import HomePage from "./admitteddk/home/index";
import PortfolioPage from "./admitteddk/portfolio/index";
import ContactPage from "./admitteddk/contact/index";
import { BackgroundEffects } from "./components/BackgroundEffects";

function App() {
  return (
    <Router>
      <div style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}>
        <FluidCursor
          size={30}
          color="white"
          opacity={0.9}
          border="none"
          TransitionTime={0.1}
          hideDefaultCursor={true}
        />
      </div>
      <BackgroundEffects />
      <div className="relative z-10 m-0 p-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
