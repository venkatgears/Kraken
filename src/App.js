import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/kraken" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
