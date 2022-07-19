import React, { useState } from 'react';
//import Review from '../Review';
import {Card, Row, Col, Container, Cover} from 'react-bootstrap';


const TestimonialList = ({ tech }) => {
    const [clients] = useState([
        {
            name: 'Allen Wang',
            image: 'Allen-Wang-pfp.jpg',
            title: 'Full-Stack Software Developer',
            company: 'Tai Software',
            link: 'https://www.linkedin.com/in/allenc-wang/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        },
        {
            name: 'Jeremy Huynh',
            image: 'Jeremy-Huynh-pfp.jpg',
            title: 'Freelance Full-Stack Software Developer',
            company: 'Self-employed',
            link: 'https://www.linkedin.com/in/jeremy-huynh/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Kristy Tran',
            image: 'Kristy-Tran-pfp.jpg',
            title: 'Desktop Support Specialist',
            company: 'Palo Alto Networks',
            link: 'https://www.linkedin.com/in/kristytran24/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Sonia Yu',
            image: 'Sonia-Yu-pfp.jpg',
            title: 'Cybersecurity Consultant',
            company: 'Moss Adams',
            link: 'https://www.linkedin.com/in/sonia-yu/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Therese Nguyen',
            image: 'Therese-Nguyen-pfp.jpg',
            title: 'Master Scheduler',
            company: 'Gener8',
            link: 'https://www.linkedin.com/in/theresen/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]);

    return(
        <Container className='testimonial-container'>
            <Row className='flex-row'>
                {clients.map((client, i) => (
                    <Col className='testimonial-column' xs={12} md={6} lg={3}>
                        <Card 
                            className='testimonial-card'
                            // NOTE TO KAYLIN: For some reason, the background-color property doesn't work in index.css 
                            // so we had to hard-code the style here.
                            style={{ backgroundColor: '#5b5b5b' }} 
                        >
                            <Card.Header></Card.Header>
                            <Card.Img resizeMode={'cover'} height-max={50} className='testimonial-img' src={require(`../../../assets/profilePics/${client.image}`)} />
                            <Card.Body>
                                <Card.Title as='h5'>{client.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default TestimonialList;