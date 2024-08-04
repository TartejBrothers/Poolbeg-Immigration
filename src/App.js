import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import WorkPermit from "./pages/workpermit";
import Stamp1GOverview from "./pages/stamp1g-overview";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-permit" element={<WorkPermit />} />
          <Route path="/stamp1g-overview" element={<Stamp1GOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
