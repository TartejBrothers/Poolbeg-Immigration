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
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import CriticalSkills from "./pages/critical-skills";
import GeneralPemits from "./pages/generalpermits";
import ReactivationPermits from "./pages/reactivationpermits";
import OtherPermits from "./pages/otherpermits";
import DependantPermits from "./pages/dependantpermits";
import AppealPermits from "./pages/appealpermit";
import LabourPermits from "./pages/labourpermit";
import TrustedPermits from "./pages/trustedpartnership";
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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/work-permit/critical-skills"
            element={<CriticalSkills />}
          />
          <Route
            path="/work-permit/general-permits"
            element={<GeneralPemits />}
          />
          <Route
            path="/work-permit/reactivation-permits"
            element={<ReactivationPermits />}
          />
          <Route path="/work-permit/other-permits" element={<OtherPermits />} />
          <Route
            path="/work-permit/dependant-permits"
            element={<DependantPermits />}
          />
          <Route
            path="/work-permit/appeal-permits"
            element={<AppealPermits />}
          />
          <Route
            path="/work-permit/labour-permits"
            element={<LabourPermits />}
          />
          <Route
            path="/work-permit/trusted-partnership"
            element={<TrustedPermits />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
