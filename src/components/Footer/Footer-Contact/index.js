import React from 'react';
import { Col } from 'react-bootstrap';


const FooterContact = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/contact'>Contact Us</a>
            </h3>
            <a href="" className="footer-link">LinkedIn</a><br/>
            <a href="" className="footer-link">Instagram</a><br/>
            <a href="" className="footer-link">ykbcoaching@gmail.com</a><br/>
        </Col>
    );
};

export default FooterContact;