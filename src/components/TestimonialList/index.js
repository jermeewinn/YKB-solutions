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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        },
        {
            name: 'Jeremy Huynh',
            src: 'Jeremy-Huynh-pfp.jpg',
            title: 'Freelance Full-Stack Software Developer',
            company: 'Self-employed',
            link: 'https://www.linkedin.com/in/jeremy-huynh/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Kristy Tran',
            src: 'Kristy-Tran-pfp.jpg',
            title: 'Desktop Support Specialist',
            company: 'Palo Alto Networks',
            link: 'https://www.linkedin.com/in/kristytran24/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Sonia Yu',
            src: 'Sonia-Yu-pfp.jpg',
            title: 'Cybersecurity Consultant',
            company: 'Moss Adams',
            link: 'https://www.linkedin.com/in/sonia-yu/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Therese Nguyen',
            src: 'Therese-Nguyen-pfp.jgp',
            title: 'Master Scheduler',
            company: 'Gener8',
            link: 'https://www.linkedin.com/in/theresen/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]);

    return(
        <div>
            <div className='flex-row'>
                {clients.map((client, i) => (
                    <Review client={client} />
                ))}
            </div>
        </div>
    )
};

export default TestimonialList;