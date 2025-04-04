import { Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from './pages/website/LandingPage'
import { PlantCollection } from "./pages/website/PlantsCollections";
import LoginAdmin from "./pages/admin/authentication/AdminLogin";
import PlantAddForm from "./pages/admin/AddPlant";
import {AdminDashboard } from "./pages/admin/Dashboard";
import React from "react";

const App: React.FC = () =>{
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plant-collections" element={<PlantCollection/>} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/admin/login" element = {<LoginAdmin/>}/>
        

        <Route path="/admin/*" element={<AdminDashboard/>} />
      </Routes>
  );
}

export default App
