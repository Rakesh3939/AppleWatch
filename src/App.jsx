import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomizationProvider } from "./components/context/CustomizationContext";
import LandingPage from "./pages/LandingPage";
import CustomizationPage from "./pages/CustomizationPage";

const App = () => {
  return (
    <CustomizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customize" element={<CustomizationPage />} />
        </Routes>
      </Router>
    </CustomizationProvider>
  );
};

export default App;
