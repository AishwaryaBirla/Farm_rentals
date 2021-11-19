import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import EquipmentList from './Components/EquipmentList/EquipmentList';
import EquipmentById from './Components/EquipmentById/EquipmentById';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import ContactUs from './Components/ContactUs/ContactUs';
import FarmerRegistration from './Components/FarmerRegistration/FarmerRegistration';
import LessorRegistration from './Components/LessorRegistration/LessorRegistration';
import './App.css';

function App() {
  return (
    <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/> 
          
          <Route path="lessorRegistration" element={<LessorRegistration />} /> 
          <Route path="farmerRegistration" element={<FarmerRegistration />} />
          <Route path="equipmentList" element={<EquipmentList />} />
          <Route path=":equipmentId" element={<EquipmentById/>} />
          <Route path="contactUs" element={<ContactUs />} />  
        </Routes>
    </div>
  );
}

export default App;
