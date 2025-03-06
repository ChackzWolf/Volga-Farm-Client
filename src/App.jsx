import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from './pages/website/LandingPage'
import { PlantCollection } from "./pages/website/PlantsCollections";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plant-collections" element={<PlantCollection/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/admin" element={<h1>Admin Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
