import React from 'react';
import { Col } from 'react-bootstrap';

const FooterAbout = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/about' className='footer-label'>About Us</a>
            </h3>
            <hr className='footer-hr'/>
            <a href="" className="footer-link">Company</a><br/>
            <a href="" className="footer-link">Partnerships</a><br/>
            <a href="" className="footer-link">Careers</a><br/>
            <a href="" className="footer-link">Success Stories</a>
        </Col>
    );
};

export default FooterAbout;