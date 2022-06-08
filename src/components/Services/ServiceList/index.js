import React, { useState } from 'react';
import Product from '../Product';

const ServiceList = ({  }) => {
    const [services] = useState([
        {
            name: 'Career Conulting',
            description: 'Career consulting is our bread and butter. Here we sit you down in a one-on-one setting and get to figuring out what you want for your career in the next 5 years, and what next steps you need to take to get there.'
        },
        {
            name: 'Resume Review',
            description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We will be making sure that your resume will be optimized for ATS tracking, and is easy to read for human readers in your job search.'
        },
        {
            name: 'LinkedIn Audit',
            description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting efficiently.'
        },
        {
            name: 'Cover Letter Composition',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.'
        },
        {
            name: 'Interview Prep',
            description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage"
        }
    ]);

    return(
        <div>
            <div className='flex-row'>
                {services.map((services, i) => (
                    <Product service={product} />
                ))}
            </div>
        </div>
    )
};

export default ServiceList;