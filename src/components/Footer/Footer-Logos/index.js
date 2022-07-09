import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram, ImFacebook } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const FooterLogos = () => {
    return(
        <div className="footer-logo-row flex-fill">
            <div className="logo-hr flex-fill">
                <hr/>
            </div>
            <h3 className="footer-logo-content">
                <a href="" className="footer-logo"><FaLinkedin /></a>&nbsp;
                <a href="" className="footer-logo"><ImInstagram /></a>&nbsp;
                <a href="" className="footer-logo"><MdEmail /></a>&nbsp;
                <a href="" className="footer-logo"><BsTwitter /></a>&nbsp;
                <a href="" className="footer-logo"><ImFacebook /></a>&nbsp;
            </h3>
            <div className="logo-hr flex-fill">
                <hr/>
            </div>
        </div>
    );
};

//NOTE TO SELF: Lines before and after footer-logo-content are created by <hr/> tags. 
//Normally they would act as subject breaks that would span the entire length of the screen, but if you were to treat them w/ flex-fill, display: flex, and justify-content: space-between,
//they would be treated as three children to a parent div.

export default FooterLogos;