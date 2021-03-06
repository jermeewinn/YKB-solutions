import React, { useEffect } from 'react';

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
        <header>
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
    )
};


export default Nav;