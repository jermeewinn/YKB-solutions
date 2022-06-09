import React, { useState } from 'react';
import Product from '../Product';

const ServiceList = ({  }) => {
    const [services] = useState([
        {
            name: 'Career Consulting',
            description: 'Career consulting is our bread and butter. Here we sit you down in a one-on-one setting and get to figuring out what you want for your career in the next 5 years, and what next steps you need to take to get there. Every program is different, and we tailor to your goals and needs.',
            src: 'Meeting.jpg'
        },
        {
            name: 'Resume Review',
            description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.',
            src: 'Resume.jpg'
        },
        {
            name: 'LinkedIn Audit',
            description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.',
            src: 'LinkedIn.jpg'
        },
        {
            name: 'Cover Letter Composition',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
            src: 'Typing.jpg'
        },
        {
            name: 'Interview Prep',
            description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage",
            src: 'Interview.jpg'
        }
    ]);

    return(
        <div>
            <div className='flex-row'>
                {services.map((service, i) => (
                    <Product service={service} />
                ))}
            </div>
        </div>
    )
};

export default ServiceList;