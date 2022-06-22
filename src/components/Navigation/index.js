import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Resources from '../Resources';
import Testimonials from '../Testimonials';
import Contact from '../Contact';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg='dark' expand='lg'>
                        <Container>
                            <Navbar.Brand href="#home">YKB Coaching</Navbar.Brand>
                            <Navbar.Toggle aria-controls='navbarScroll' />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav 
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
                                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />         
                        <Route path="/about" element={<About />} />                            
                        <Route path="/services" element={<Services />} />
                        <Route path="/resources" element={<Resources />} />                            
                        <Route path="/testimonials" element={<Testimonials />} />                            
                        <Route path="/contact" element={<Contact />} />   
                    </Routes>
                </div>
            </Router>
        );
    };
};