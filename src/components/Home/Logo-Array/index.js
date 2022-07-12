import React from 'react';
import uc_davis from '../../../assets/logos/uc_davis.png';
import moss_adams from '../../../assets/logos/moss_adams.png';

function LogoArray() {
    return(
        <container>
            <h5>Here are some of the companies our clients work at</h5>
            <div id='logo-array'>
                <a href='/testimonials'>
                    <img src={uc_davis} alt='UC Davis Logo' className='home-logo' />
                </a>
                <a href='/testimonials'>
                    <img src={moss_adams} alt='Moss Adams Logo' className='home-logo' />
                </a>
            </div>
        </container>
    );
};

export default LogoArray;