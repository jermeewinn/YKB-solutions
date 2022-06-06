import React from 'react';
import FooterServices from './Footer-Services';
import FooterResources from './Footer-Resources';
import FooterCompany from './Footer-Company';
import FooterContact from './Footer-Contact';


const Footer = () => {
    return(
        <footer className='w=100 mt-auto bg-secondary p-4'>
            <div className='container'>
                <FooterServices />
                <FooterResources />
                <FooterCompany />
                <FooterContact />
            </div>
            <h6>&copy;{new Date().getFullYear()} YKB Solutions Inc.</h6>
        </footer>
    );
};

export default Footer;