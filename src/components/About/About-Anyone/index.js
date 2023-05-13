import React from 'react';
import Group from '../../../assets/stockPhotos/group-small.jpg';

function AboutAnyone() {
    return(
        <div className='row about-subsection align-items-center'>
            <div className='col-md-6'>
                <h4>
                    Anyone Can Join
                </h4>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet, conscectetu adipiscing sum dolo sit amet. consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet
                </p>
            </div>
            <div className='col-md-6'>
                <img src={Group} alt='Group work photo'></img>
            </div>
        </div>
    )
};

export default AboutAnyone;