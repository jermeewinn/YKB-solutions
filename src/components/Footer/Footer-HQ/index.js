import React from 'react';
import { Col } from 'react-bootstrap';

const FooterHQ = () => {
    return(
        <Col className="footer-column">
            <h3>
                Headquarters
            </h3>
            <hr />
            <div>
                2400 East Katella Ave, Suite 725<br/>
                Anaheim, CA 92806
            </div>
            <hr className='footer-hr'/>
            <div>
                Office: (111) 111-1111
            </div>
            <hr className='footer-hr'/>
            <div>
                Email: ykbcoaching@gmail.com
            </div>
        </Col>
    )
};

export default FooterHQ;