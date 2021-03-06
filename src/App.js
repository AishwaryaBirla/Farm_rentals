import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import EquipmentList from './Components/EquipmentList/EquipmentList';
import EquipmentById from './Components/EquipmentById/EquipmentById';
import ContactUs from './Components/ContactUs/ContactUs';
import FarmerRegistration from './Components/FarmerRegistration/FarmerRegistration';
import LessorRegistration from './Components/LessorRegistration/LessorRegistration';
import AddVehicle from './Components/AddVehicle/AddVehicle';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/> 
          
          <Route path="lessorRegistration" element={<LessorRegistration />} /> 
          <Route path="farmerRegistration" element={<FarmerRegistration />} />
          <Route path="equipmentList" element={<EquipmentList />} />
          <Route path=":equipmentId" element={<EquipmentById/>} />
          <Route path="contactUs" element={<ContactUs />} />  
          <Route path="addvehicle" element={<AddVehicle />} /> 
        </Routes>
    </div>
  );
}

export default App;
