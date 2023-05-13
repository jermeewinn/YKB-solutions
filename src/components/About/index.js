import React from 'react';
import { Helmet } from 'react-helmet';
import AboutValues from './About-Values';
import AboutSpecial from './About-Special';
import AboutAnyone from './About-Anyone';

function About() {
    return(
        <section id='about'>
            <Helmet>
                <title>YKB Coaching | Who We Are</title>
            </Helmet>
            <div className='about-banner'>
                <h1 className='my-5'>About YKB Coaching</h1>
                <div className='contact-content'> 
                    <h4>Lorem ipsum dolor sit amet, concestetu adipiscing.</h4>
                    <div>
                        <p className='about-banner-paragraph'>
                            Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet
                        </p>
                    </div>
                </div>
            </div>
            <AboutValues />
            <AboutSpecial />
            <AboutAnyone />
        </section>
    )
};

export default About;