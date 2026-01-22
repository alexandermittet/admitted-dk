import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./admitteddk/home/index";
import PortfolioPage from "./admitteddk/portfolio/index";
import ContactPage from "./admitteddk/contact/index";
import { BackgroundEffects } from "./components/BackgroundEffects";
import CanvasCursor from "./components/CanvasCursor";

function App() {
  return (
    <Router>
      <CanvasCursor />
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
