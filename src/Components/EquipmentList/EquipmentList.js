import React from 'react';
import ToolsNavbar from './../toolsNavbar/ToolsNavbar';
import {CardGroup, Card, CardTitle} from 'reactstrap';
import './EquipmentList.css';
const EquipmentList = () => {
    return (
        <>
            <ToolsNavbar />
            <div className="parent_div">
            <div className="col-10"> 
            <CardGroup>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>MINI TRACTORS</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '18rem', height: '8rem' }}
                 >
                <CardTitle>4WD TRACTORS</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>AC CABIN TRACTORS </CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>POWER TILLERS </CardTitle>
            </Card>
            </CardGroup>
            <CardGroup>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>ROTARY TILLERS </CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '18rem', height: '8rem' }}
                 >
                <CardTitle>SELF PROPELLED HARVESTORS</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>TRACTOR MOUNTED HARVESTORS</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>HARROW</CardTitle>
            </Card>
            </CardGroup>
            <CardGroup>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>PLOUGH</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '18rem', height: '8rem' }}
                 >
                <CardTitle>CULTIVATOR</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>BRUSH CUTTERS  </CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>SPRAYERS</CardTitle>
            </Card>
            </CardGroup>
            <CardGroup>
            
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '18rem', height: '8rem' }}
                 >
                <CardTitle>POWER WEEDERS</CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>MOWERS AND TRIMMERS  </CardTitle>
            </Card>
            <Card
                className="margin"
                 bg='danger'
                 text= 'dark'
                 style={{ width: '14rem',height: '8rem' }}
                 >
                <CardTitle>ACCESORIES</CardTitle>
            </Card>
            </CardGroup> 
            </div>
            </div>
        </>
    );
}
export default EquipmentList;