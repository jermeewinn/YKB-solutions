import React from 'react';
import uc_davis from '../../../assets/logos/uc_davis.png';
import moss_adams from '../../../assets/logos/moss_adams.png';
import bluevine from '../../../assets/logos/bluevine.png';
import gridsme from '../../../assets/logos/gridsme.png';
import pan from '../../../assets/logos/palo_alto_networks.png';
import armis from '../../../assets/logos/armis.png';
import alation from '../../../assets/logos/alation.png';
import skedulo from '../../../assets/logos/skedulo.webp';
import tai_software from '../../../assets/logos/tai_software.png';

//NOTE TO SELF: See if there's a more efficient way of creating the logo-array while keeping the styling we have.
//NOTE TO SELF: Because the some of the logos utilize a variety of grayscales, we will need to ensure that the background color
// for LogoArray() remains at hex color value: #adb5bd.
function LogoArray() {
    return(
        <container id='logo-array' className='home-logo-array'>
            <h2>Some companies our clients work at now</h2>
            <div>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={uc_davis} alt='UC Davis Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={moss_adams} alt='Moss Adams Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={bluevine} alt='BlueVine Capital Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={gridsme} alt='GridSME Capital Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={pan} alt='Palo Alto Networks Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={armis} alt='Armis Security Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={alation} alt='Alation Inc. Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={skedulo} alt='Skedulo Logo' className='home-logo' />
                </a>
                <a href='/testimonials' className='home-logo-background'>
                    <img src={tai_software} alt='Tai Software Logo' className='home-logo' />
                </a>
            </div>
        </container>
    );
};

export default LogoArray;