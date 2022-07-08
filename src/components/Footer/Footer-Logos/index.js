import React from 'react';
import { Col } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const FooterLogos = () => {
    return(
        <Col className="footer-column">
            <div>
                <a href="" className="footer-icon"><FaLinkedin /></a>&nbsp;
                <a href="" className="footer-icon"><ImInstagram /></a>&nbsp;
                <a href="" className="footer-icon"><MdEmail /></a>&nbsp;
                <a href="" className="footer-icon"><BsTwitter /></a>&nbsp;
                <a href="" className="footer-icon"><ImFacebook /></a>&nbsp;

            </div>
        </Col>
    );
};

export default FooterLogos;