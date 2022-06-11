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
        // <>
        //     <Navbar bg='dark' variant='dark'>
                
        //     </Navbar>
        // </>
    )
};


export default Nav;