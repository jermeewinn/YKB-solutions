import React, { Component, useEffect } from 'react';
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
import Testimonials from '../Testimonials';
import Contact from '../Contact';

// function Navigation(props) {
//     const {
//         categories = [],
//         setCurrentCategory,
//         currentCategory
//     } = props;

//     useEffect(() => {
//         document.title = currentCategory.name;
//     }, [currentCategory]);

//     return (
//         <header className='flex-row px-1'>
//             <h1>
//                 <a href='/'>
//                     YKB Solutions Inc.
//                 </a>
//             </h1>
//             <nav>
//                 <ul>
//                     {categories.map((category) => (
//                         <li className={`mx-2 ${currentCategory === category.name && 'navActive'}`} key={category.name}>
//                             <span onClick={() => { setCurrentCategory(category)}}>
//                                 {category.name}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
//         <Navbar bg='dark' expand='lg'>
//             <Container>
//                 <Navbar.Brand href="#home">YKB Coaching</Navbar.Brand>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#about">About</Nav.Link>
//                         <Nav.Link href="#services">Services</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// };

// export default Navigation;


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
                            
                        <Route path="/testimonials" element={<Testimonials />} />
                            
                        <Route path="/contact" element={<Contact />} />   
                    </Routes>
                </div>
            </Router>
        )
    }
};