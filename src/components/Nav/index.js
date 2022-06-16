import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header className='flex-row px-1'>
            <h1>
                <a href='/'>
                    YKB Solutions Inc.
                </a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li className={`mx-2 ${currentCategory === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category)}}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        // <Navbar bg='light' expand='lg'>
        //     <Container>
        //         <Navbar.Brand href="#home">YKB Coaching</Navbar.Brand>
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
};


export default Nav;