import React from 'react';
import FooterServices from './Footer-Services';
import FooterResources from './Footer-Resources';

const Footer = () => {
    return(
        <footer className='w=100 mt-auto bg-secondary p-4'>
            <div className='container'>
                <FooterServices />
                <FooterResources />
                <h6>&copy;{new Date().getFullYear()} YKB Solutions Inc.</h6>
            </div>
        </footer>
    );
};

export default Footer;