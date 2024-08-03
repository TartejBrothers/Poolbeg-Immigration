import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import WorkPermit from "./pages/workpermit";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-permit" element={<WorkPermit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
