import React from 'react';

function LogoArray() {
    return(
        <container>
            <h5>Here are some of the companies our clients work at</h5>
            <div id='logo-array'>
                <a href='/testimonials'>
                    <img src='src\assets\logos\uc_davis.png' alt='UC Davis Logo' />
                </a>
                <a href='/testimonials'>
                    <img src='src\assets\logos\moss_adams/pmg' alt='Moss Adams Logo' />
                </a>
            </div>
        </container>
    );
};

export default LogoArray;