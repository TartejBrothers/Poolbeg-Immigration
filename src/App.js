import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatsAppButton from "./components/whatsappbutton";
import CalendlyButton from "./components/calendly";
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
import CriticalSkillOccupation from "./pages/criticalskill-occupation";
import WorkVisa from "./pages/workvisa";
import StudyVisa from "./pages/studyvisa";
import ShortTermVisa from "./pages/shorttemvisa";
import FamilyVisa from "./pages/familyvisa";
import Stamp4 from "./pages/stamp4";
import Stamp5 from "./pages/stamp5";
import Stamp6 from "./pages/stamp6";
import OtherStamps from "./pages/otherstamps";
import SpouseVisa from "./pages/spousevisa";
import PartnerVisa from "./pages/partnervisa";
import TandC from "./pages/termsandconditions";
import ChildVisa from "./pages/childvisa";
import ImmigrationPermission from "./pages/immigiration-permission";
import DataPrivacy from "./pages/data-privacy";
import CookiePolicy from "./pages/cookies-policy";
function App() {
  return (
    <div className="App">
      {/* <CalendlyButton /> */}
      <WhatsAppButton />
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
          <Route
            path="/work-permit/critical-occupation"
            element={<CriticalSkillOccupation />}
          />
          <Route path="/immigration/work-visa" element={<WorkVisa />} />
          <Route path="/immigration/study-visa" element={<StudyVisa />} />
          <Route
            path="/immigration/short-term-visa"
            element={<ShortTermVisa />}
          />
          <Route path="/immigration/family-visa" element={<FamilyVisa />} />
          <Route path="/immigration/stamp4" element={<Stamp4 />} />
          <Route path="/immigration/stamp5" element={<Stamp5 />} />
          <Route path="/immigration/stamp6" element={<Stamp6 />} />
          <Route path="/immigration/other-stamps" element={<OtherStamps />} />
          <Route path="/immigration/spouse-visa" element={<SpouseVisa />} />
          <Route path="/immigration/partner-visa" element={<PartnerVisa />} />
          <Route path="/immigration/child-visa" element={<ChildVisa />} />
          <Route
            path="/immigration/immigration-permission"
            element={<ImmigrationPermission />}
          />
          <Route path="/data-privacy" element={<DataPrivacy />} />
          <Route path="/terms-and-conditions" element={<TandC />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
