import React from 'react';
import ToolsNavbar from './../toolsNavbar/ToolsNavbar';
import {CardGroup, Card, CardTitle} from 'reactstrap';
import EquipListCarousel from './EquipListCarousel';
import './EquipmentList.css';
const EquipmentList = () => {
    return (
        <>
            <ToolsNavbar />
            <div className="parent_div">
            <div className="col-12"> 
                <EquipListCarousel />
            </div>
            </div>
        </>
    );
}
export default EquipmentList;