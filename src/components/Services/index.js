import React from 'react';
import ServiceList from '../Services/ServiceList';

function Services() {
    return(
        <section id='services'>
            <div className='services-container'>
                <h1>Looking to Kickstart Your Career?</h1>
                <h4>We'll get you started with a free consultation</h4>
                <div>
                    <p>The questions you'll need the answers for are:</p>
                    <ul>
                        <li>
                            What do you want to change about your career right now?
                        </li>
                        <li>
                            What do you want to be doing in 5 years?
                        </li>
                        <li>
                            What would be your first step in moving in this new direction?
                        </li>
                    </ul>
                </div>
            </div>
            <div className='services-container'>
                <h1>Our customers want to make changes in their careers. We give them the tools to achieve that.</h1>
            </div>
            
        </section>
    );
};
export default Services;