import React from 'react';
import { Col } from 'react-bootstrap';



const FooterCompany = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/company'>Company</a>
            </h3>
            <a href="" className="footer-link">About Us</a><br/>
            <a href="" className="footer-link">Who We Are</a><br/>
            <a href="" className="footer-link">What We Do</a><br/>
        </Col>
    );
};

export default FooterCompany;