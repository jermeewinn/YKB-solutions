import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterServices from './Footer-Services';
import FooterResources from './Footer-Resources';
import FooterAbout from './Footer-About';
import FooterLogos from './Footer-Logos';
import FooterHQ from './Footer-HQ';

// NOTE TO SELF: Next time when implementing CSS Bootstrap for Col, Container, Row elements, just import whatever elements you need from
// react-bootstrap npm package. Documentation for React-Bootstrap is unreliable. 

function Footer() {
    return (
        <footer className='w=100 mt-auto bg-secondary p-4'>
            <Container className='container'>
                <FooterLogos />
                <Row>
                    <FooterServices />
                    <FooterAbout />
                    <FooterResources />
                    <FooterHQ />
                </Row>
            </Container>
            <h6 classname='copyright'>
                &copy;{new Date().getFullYear()} YKB Solutions Inc.&nbsp;|&nbsp;Terms and Conditions&nbsp;|&nbsp;Privacy Policy&nbsp;|&nbsp;Disclosures</h6>
        </footer>
    );
};

export default Footer;