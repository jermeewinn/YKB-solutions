import React from 'react';
import { Col } from 'react-bootstrap';


const FooterResources = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/resources' className='footer-label'>Resources</a>
            </h3>
            <hr/>
            <a href="" className="footer-link">Blog</a><br/>
            <a href="" className="footer-link">FAQ</a><br/>
        </Col>
    );
};

export default FooterResources;