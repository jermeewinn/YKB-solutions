import React from 'react';
import uc_davis from '../../../assets/logos/uc_davis.png';
import moss_adams from '../../../assets/logos/moss_adams.png';
import bluevine from '../../../assets/logos/bluevine.png';
import gridsme from '../../../assets/logos/gridsme.png';
import pan from '../../../assets/logos/palo_alto_networks.png';

function LogoArray() {
    return(
        <container id='logo-array' className='home-logo-array'>
            <h2>Some companies our clients work at now</h2>
            <div>
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
                <a href='/testimonials'>
                    <img src={pan} alt='GridSME Capital Logo' className='home-logo' />
                </a>
            </div>
        </container>
    );
};

export default LogoArray;