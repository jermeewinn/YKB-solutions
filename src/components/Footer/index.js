import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterServices from './Footer-Services';
import FooterResources from './Footer-Resources';
import FooterCompany from './Footer-Company';
import FooterContact from './Footer-Contact';


const Footer = () => {
    return(
        <footer className='w=100 mt-auto bg-secondary p-4'>
            <Container className='container'>
                <Row>
                    <FooterServices />
                    <FooterResources />
                    <FooterCompany />
                    <FooterContact />
                </Row>
            </Container>
            <h6>&copy;{new Date().getFullYear()} YKB Solutions Inc.</h6>
        </footer>
    );
};

export default Footer;