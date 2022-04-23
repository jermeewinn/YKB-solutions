import React, { useState } from 'react';
import Review from '../Review';

const TestimonialList = ({ tech }) => {
    const [clients] = useState([
        {
            name: 'Allen Wang',
            src: 'Allen-Wang-pfp.jpg',
            title: 'Full-Stack Software Developer',
            company: 'Tai Software',
            link: 'https://www.linkedin.com/in/allenc-wang/',
            description: ''

        },
        {
            name: 'Jeremy Huynh',
            src: 'Jeremy-Huynh-pfp.jpg',
            title: 'Freelance Full-Stack Software Developer',
            company: 'Self-employed',
            link: 'https://www.linkedin.com/in/jeremy-huynh/',
            description: ''
        },
        {
            name: 'Kristy Tran',
            src: 'Kristy-Tran-pfp.jpg',
            title: 'Desktop Support Specialist',
            company: 'Palo Alto Networks',
            link: 'https://www.linkedin.com/in/kristytran24/',
            description: ''
        },
        {
            name: 'Sonia Yu',
            src: 'Sonia-Yu-pfp.jpg',
            title: 'Cybersecurity Consultant',
            company: 'Moss Adams',
            link: 'https://www.linkedin.com/in/sonia-yu/',
            description: ''
        },
        {
            name: 'Therese Nguyen',
            src: 'Therese-Nguyen-pfp.jgp',
            title: 'Master Scheduler',
            company: 'Gener8',
            link: 'https://www.linkedin.com/in/theresen/',
            description: ''
        }
    ]);

    
};

export default TestimonialList;