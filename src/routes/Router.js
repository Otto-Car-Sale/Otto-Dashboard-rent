import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import editVehicleDetails from "../pages/editVehicleDetails";
import Dashboard from "../pages/Dashboard";
import Renting from "../pages/Renting";
import AddRentCars from "../pages/AddRentCars";
import Settings from "../pages/Settings";
//import Licences from "../pages/Licences";
// import AddVehicleForm from "../components/AddVehicleForm";
//import { Routes, Route } from 'react-router-dom';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />} />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/renting" element={<Renting />} />
      <Route path="/add-rent-car" element={<AddRentCars />} />
     
      <Route path="/settings" element={<Settings />} />
      <Route path="/editVehicleDetails" element={<editVehicleDetails />} />
      {/* <Route path="/add-vehicle" element={<AddVehicleForm/>} /> */}
    </Routes>
  );
};

export default Router;


