import React from 'react';
import Resume from '../../../assets/stockPhotos/Resume.jpg';

function AboutSpecial() {
    return(
        <div className='row about-subsection align-items-center'>
            <div className='col-md-6'>
                <h4>
                    Specializations
                </h4>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet, conscectetu adipiscing sum dolo sit amet. consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet
                </p>
            </div>
            <div className='col-md-6'>
                <img src={Resume} alt='Resume photo'></img>
            </div>
        </div>
    )
};

export default AboutSpecial;