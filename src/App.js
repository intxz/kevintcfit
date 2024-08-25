import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloDesktop from "./components/desktop/HelloDesktop";
import HelloMobile from "./components/mobile/HelloMobile";
//import Cooking from "./components/desktop/Cooking";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1366);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1366);
  };

  useEffect(() => {
    window.removeEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isMobile ? <HelloMobile /> : <HelloDesktop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
