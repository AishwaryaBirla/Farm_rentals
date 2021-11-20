import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,
         Collapse, Nav, NavItem, NavLink, 
         UncontrolledDropdown,DropdownToggle, 
         DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';         
         
const ToolsNavbar = () =>{
    return (
        <>
            <div>
            <Navbar
                color="dark"
                expand="md"
                dark
                
            >
                <NavbarBrand href="/" className="font_changes">
                    {/* <img src = {brandName} /> */}
                    Farm To Profit
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >                        
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                TRACTORS
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">MINI TRACTORS</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">4WD TRACTORS</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark">AC CABIN TRACTORS</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                IMPLEMENTS
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">ROTARY TILLER</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">CULTIVATOR</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">PLOUGH</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark">HARROW</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">TRAILER</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">SPRAYER</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/login">
                                HARVESTER
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contactUs">
                                TOOLS
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                USER PROFILE
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">EDIT PROFILE</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">FAVOURITES</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">CART</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark">ORDERS</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">LOGOUT</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>                        
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        </>
    );
}

export default ToolsNavbar;