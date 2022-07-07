import React from 'react';
import { Col } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const FooterContact = () => {
    return(
        <Col className="footer-column">
            <h3>
                <a href='/contact' className='footer-label'>Contact Us</a>
            </h3>
            <div>
                <a href="" className="footer-icon"><FaLinkedin /></a>
                <a href="" className="footer-icon"><ImInstagram /></a>
                <a href="" className="footer-icon"><MdEmail /></a>
                <a href="" className="footer-icon"><BsTwitter /></a>
                <a href="" className="footer-icon"><ImFacebook /></a>

            </div>
        </Col>
    );
};

export default FooterContact;