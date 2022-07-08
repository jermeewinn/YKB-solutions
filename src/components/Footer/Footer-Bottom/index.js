import React from 'react';

const FooterBottom = () => {
    return(
        <h6 className='copyright'>
            &copy;{new Date().getFullYear()} YKB Solutions Inc.&nbsp;|&nbsp;<a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>&nbsp;|&nbsp;<a href="" className="footer-link">Privacy Policy</a>&nbsp;|&nbsp;<a href="" className="footer-link">Disclosures</a>
        </h6>
    );
};

export default FooterBottom;