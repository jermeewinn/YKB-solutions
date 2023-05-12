import React from 'react';
import { Col } from 'react-bootstrap';


function AboutValues() {
    return(
        <div className='row'>
            <div className='col-md-6'>
                <h4>
                    Our Values
                </h4>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet, conscectetu adipiscing sum dolo sit amet. consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet
                </p>
            </div>
            <div className='col-md-6 about-text'>
                <div>
                    <Col>
                        <p>1. Lorem ipsum dolor sit amet, consectetu.</p>
                        <p>2. Lorem ipsum dolor sit amet, consectetu.</p>
                        <p>3. Lorem ipsum dolor sit amet, consectetu.</p>
                        <p>4. Lorem ipsum dolor sit amet, consectetu.</p>
                        <p>5. Lorem ipsum dolor sit amet, consectetu.</p>
                    </Col>
                </div>
            </div>
        </div>
        
    )
};

export default AboutValues;