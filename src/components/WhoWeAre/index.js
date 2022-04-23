import React from 'react';
import profilePic1 from '../../assets/profilePics/Jeremy-Huynh-pfp.jpg';
import profilePic2 from '../../assets/profilePics/Michael-Mei-pfp.jpg';


function About() {
    return(
        <section id='about'>
            <h1 id='about'>Who We Are</h1>
            <div id='sideByside'>
                <div id='me-image'>
                    <img id='Michael' src={profilePic2} className='my-2' alt='portrait-Michael' />
                </div>
            </div>
        </section>
    )
}