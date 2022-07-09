import React from 'react';
import { Col } from 'react-bootstrap';

const FooterServices = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/services' className='footer-label'>Services</a>
            </h3>
            <hr className='footer-hr'/>
            <a href="" className="footer-link">Career Consulting</a><br/>
            <a href="" className="footer-link">Resume Revision</a><br/>
            <a href="" className="footer-link">Linkedin Review</a><br/>
            <a href="" className="footer-link">Cover Letter Revision</a><br/>
            <a href="" className="footer-link">Interview Prep</a><br/>
            <a href="" className="footer-link">Job Search Strategies</a>
        </Col>
    );
};

export default FooterServices;