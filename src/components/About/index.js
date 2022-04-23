import React from 'react';
import profilePic from '../../assets/profilePics/Michael-Mei-pfp.jpg';


function About() {
    return(
        <section id='about'>
            <h1 id='about'>Who We Are</h1>
            <div id='sideByside'>
                <div id='me-image'>
                    <img id='Michael' src={profilePic} className='my-2' alt='portrait-Michael' />
                </div>
            </div>
            <div id='left'>
                <p>
                    Insert spiel about Michael Mei here.
                </p>
            </div>
        </section>
    )
};

export default About;