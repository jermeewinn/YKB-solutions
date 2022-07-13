import React from 'react';
import TestimonialList from './TestimonialList';

function Testimonials() {
    // const { name, description } = currentCategory;
    return(
        <section id='testimonials'>
            <h1 className='my-5'>Testimonials</h1>
            <p>Here you can see some of the user stories for previous clients dating back to 2017.</p>
            <TestimonialList />
        </section>
    )
};

export default Testimonials;