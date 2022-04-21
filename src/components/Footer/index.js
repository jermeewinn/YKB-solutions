import React from 'react';

const Footer = () => {
    return(
        <footer className='w=100 mt-auto bg-secondary p-4'>
            <div className='container'>
                <h6>&copy;{new Date().getFullYear()} YKB Solutions Inc.</h6>
            </div>
        </footer>
    );
};

export default Footer;