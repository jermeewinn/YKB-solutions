import React, { useState} from 'react';
import Hexagon from 'react-hexagon';

// WHEN user clicks on a hexagon in hex-ring on the left,
// THEN corresponding text and picture on the right.

function Hexagons() {
    const [currentName, setCurrentName] = useState('Our Services');
    const [currentDescription, setCurrentDescription] = useState('Here are some of the services we provide to our clients');

    const services = [
        {
            id: 1, 
            name: 'Resume Review', 
            description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.',
        },
        {
            id: 2,
            name: 'LinkedIn Revision',
            description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.',
        },
        {
            id: 3,
            name: 'Career Consulting',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
        },
        {
            id: 4,
            name: 'Interview Prep',
            description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage",
        },
        {   
            id: 5,
            name: 'Cover Letter',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
        }
    ];

    function changeText(id) {
        setCurrentName(services[id].name);
        setCurrentDescription(services[id].description);
    };

    return(
        <div id='hexagon-ring' className='home-services'>
            <h2>How We Can Help</h2>
            <div className='d-flex'>
                <div className='home-hexagons col-md-6'>
                    <div id='root' className='home-hex-row d-flex justify-content-center'>
                        <Hexagon
                            className='home-hexagon-styled'
                            onClick={() => changeText(1)}
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                        >
                            <text className='home-hex-text' x='25%' y='45%'>Resume</text>
                            <text className='home-hex-text' x='27%' y='60%'>Review</text>
                        </Hexagon>
                        <Hexagon
                            className='home-hexagon-styled'
                            onClick={() => setText('The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.')}
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                        >
                            <text className='home-hex-text' x='22%' y='45%'>LinkedIn</text>
                            <text className='home-hex-text' x='22%' y='60%'>Revision</text>
                        </Hexagon>
                    </div>
                    <div className='home-hex-row d-flex justify-content-center'>
                        <Hexagon
                            className='home-hexagon-styled'
                            onClick={() => setText("Don't know what you want to do? We'll schedule a consultation with you to get an idea of where you're at and where you want to go.")}
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                        >
                            <text className='home-hex-text' x='27%' y='45%'>Career</text>
                            <text className='home-hex-text' x='17%' y='60%'>Consulting</text>
                        </Hexagon>
                        {/* NOTE TO SELF: If you want to change the stroke color to a hex key value, be sure to use ` instead of '. */}
                        <Hexagon
                            className='home-hexagon-styled'
                            style={{
                                stroke: `#adb5bd`,
                            }}
                        />
                        <Hexagon
                            className='home-hexagon-styled'
                            onClick={() => setText("Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage")}
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                        >
                            <text className='home-hex-text' x='25%' y='45%'>Interview</text>
                            <text className='home-hex-text' x='35%' y='60%'>Prep</text>
                        </Hexagon>
                    </div>
                    <div className='home-hex-row d-flex justify-content-center'>
                        <Hexagon
                            className='home-hexagon-styled'
                            onClick={() => setText('If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.')}
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                        >
                            <text className='home-hex-text' x='13%' y='45%'>Cover Letter</text>
                            <text className='home-hex-text' x='10%' y='60%'>Composition</text>
                        </Hexagon>
                        {/* NOTE TO SELF: If you wnat to input an href, you will need to wrap the Hexagon. */}
                        <Hexagon
                            className='home-hexagon-styled'
                            style={{
                                stroke: 'black',
                                fill: '#adb5bd'
                            }}
                            href="/services"
                            target="_self"
                        >
                            <text className='home-hex-text' x='35%' y='45%'>View</text>
                            <text className='home-hex-text' x='42%' y='60%'>All</text>
                        </Hexagon>
                    </div>
                </div>
                <div className='home-text col-md-6'>
                    <h3>{title}</h3>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Hexagons;