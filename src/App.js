import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <h1>appjs</h1>
      <Router>
        <Routes>
          <Route path="" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
