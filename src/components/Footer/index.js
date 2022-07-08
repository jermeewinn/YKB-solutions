import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterServices from './Footer-Services';
import FooterResources from './Footer-Resources';
import FooterAbout from './Footer-About';
import FooterLogos from './Footer-Logos';
import FooterHQ from './Footer-HQ';
import FooterBottom from './Footer-Bottom'

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
            <FooterBottom />
        </footer>
    );
};

export default Footer;