import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Learner's Point</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className="mx-3 text-decoration-none text-white" to="/home">Home</NavLink>
                    <NavLink className="mx-3 text-decoration-none text-white" to="/services">Services</NavLink>
                    <NavLink className="mx-3 text-decoration-none text-white" to="/ielts">Why IELTS?</NavLink>
                    <NavLink className="mx-3 text-decoration-none text-white" to="/about">About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;