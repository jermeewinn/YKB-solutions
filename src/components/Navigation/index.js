import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// NOTE TO SELF: Most documentation on react-router-dom mention use of <Switch> exports, but as of v6, Switch is now Routes.
// More information can be found here: 
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
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
import TermsAndConditions from '../Terms&Conditions';
import PrivacyPolicy from '../PrivacyPolicy';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg='dark' variant='dark' expand='lg'>
                        <Container>
                            <Navbar.Brand as={Link} to="/" href="#home">YKB Coaching</Navbar.Brand>
                            <Navbar.Toggle aria-controls='navbarScroll' />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav 
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
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
                    {/* NOTE TO SELF: If you work off the react-router-dom documentation, you will get the following error:
                    [About] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
                    
                    You will need to place the component import w/i an element tag in order to import them. More info can be found here:
                    https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
                    <Routes>
                        <Route path="/" element={<Home />} />         
                        <Route path="/about" element={<About />} />                            
                        <Route path="/services" element={<Services />} />
                        <Route path="/resources" element={<Resources />} />                            
                        <Route path="/testimonials" element={<Testimonials />} />                            
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/disclosures" element={<Disclosures />} />
                    </Routes>
                </div>
            </Router>
        );
    };
};