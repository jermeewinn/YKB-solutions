import React from 'react';
import { Col } from 'react-bootstrap';

const FooterServices = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/services'>Services</a>
            </h3>
            <a href="" className="footer-link">Career Consulting</a><br/>
            <a href="" className="footer-link">Resume Review</a><br/>
            <a href="" className="footer-link">Linkedin Profile Audit</a><br/>
            <a href="" className="footer-link">Cover Letter Composition</a><br/>
            <a href="" className="footer-link">Interview Prep</a><br/>
        </Col>
    );
};

export default FooterServices;