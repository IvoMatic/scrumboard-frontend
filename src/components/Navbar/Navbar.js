import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import store from '../../store/store';
import Aux from '../../hoc/Auxiliary';

const navbar = (props) => {
    const state = store.getState();

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Scrumboard 0.2</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Info</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <NavDropdown title="Shop" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Cups</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bread</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Shopping cart</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">{state.user.weather? state.user.weather.name : <p>Loading...</p>}</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                {state.user.weather? <Aux>{(state.user.weather.main.temp - 273.15).toFixed(0)}&deg;C, {state.user.weather.weather[0].description}</Aux> : <p>Loading...</p>}
      </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
} 

export default navbar;