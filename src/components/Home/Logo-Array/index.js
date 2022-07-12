import React from 'react';
import uc_davis from '../../../assets/logos/uc_davis.png';
import moss_adams from '../../../assets/logos/moss_adams.png';
import bluevine from '../../../assets/logos/bluevine.png';
import gridsme from '../../../assets/logos/gridsme.png';

function LogoArray() {
    return(
        <container>
            <h5>Some companies our clients work at now</h5>
            <div id='logo-array'>
                <a href='/testimonials'>
                    <img src={uc_davis} alt='UC Davis Logo' className='home-logo' />
                </a>
                <a href='/testimonials'>
                    <img src={moss_adams} alt='Moss Adams Logo' className='home-logo' />
                </a>
                <a href='/testimonials'>
                    <img src={bluevine} alt='BlueVine Capital Logo' className='home-logo' />
                </a>
                <a href='/testimonials'>
                    <img src={gridsme} alt='GridSME Capital Logo' className='home-logo' />
                </a>
            </div>
        </container>
    );
};

export default LogoArray;