import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import WorkPermit from "./pages/workpermit";
import Stamp1GOverview from "./pages/stamp1g-overview";
import Stamp1GExtension from "./pages/stamp1g-extension";
import Immigration from "./pages/immigration";
import ServicesEmployee from "./pages/services-employee";
import ServicesIndividual from "./pages/services-individual";
import NewsandUpdates from "./pages/news-updates";
import AboutUs from "./pages/aboutus";
import CriticalSkills from "./pages/critical-skills";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-permit" element={<WorkPermit />} />
          <Route path="/stamp1g-overview" element={<Stamp1GOverview />} />
          <Route path="/stamp1g-extension" element={<Stamp1GExtension />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/services/employee" element={<ServicesEmployee />} />
          <Route path="/services/individual" element={<ServicesIndividual />} />
          <Route path="/news-updates" element={<NewsandUpdates />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/work-permit/critical-skills"
            element={<CriticalSkills />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
