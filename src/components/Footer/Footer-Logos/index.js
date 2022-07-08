import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const FooterLogos = () => {
    return(
        <div className="footer-logo-row">
            {/* <div>
                <hr/>
            </div> */}
            <h3>
                <a href="" className="footer-logo"><FaLinkedin /></a>&nbsp;
                <a href="" className="footer-logo"><ImInstagram /></a>&nbsp;
                <a href="" className="footer-logo"><MdEmail /></a>&nbsp;
                <a href="" className="footer-logo"><BsTwitter /></a>&nbsp;
                <a href="" className="footer-logo"><ImFacebook /></a>&nbsp;
            </h3>
            {/* <div>
                <hr/>
            </div> */}
        </div>
    );
};

export default FooterLogos;