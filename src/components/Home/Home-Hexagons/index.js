import React from 'react';
import Hexagon from 'react-hexagon';

function Hexagons() {
    return(
        <div id='hexagon-ring' className='home-services'>
            <h2>How We Can Help</h2>
            <div className='home-hex-ring'>
                <div id='root' className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    >
                        <text className='home-hex-text' x='25%' y='45%'>Resume</text>
                        <text className='home-hex-text' x='27%' y='60%'>Review</text>
                    </Hexagon>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    >
                        <text className='home-hex-text' x='22%' y='45%'>LinkedIn</text>
                        <text className='home-hex-text' x='22%' y='60%'>Revision</text>
                    </Hexagon>
                </div>
                <div className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
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
                        style={{
                            stroke: 'black',
                        }}
                    >
                        <text className='home-hex-text' x='25%' y='45%'>Interview</text>
                        <text className='home-hex-text' x='35%' y='60%'>Prep</text>
                    </Hexagon>
                </div>
                <div className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    >
                        <text className='home-hex-text' x='15%' y='45%'>Job Search</text>
                        <text className='home-hex-text' x='25%' y='60%'>Strategy</text>
                    </Hexagon>
                    {/* NOTE TO SELF: If you wnat to input an href, you will need to wrap the Hexagon. */}
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                        href="/services"
                        target="_blank"
                    >
                        <text className='home-hex-text' x='35%' y='45%'>View</text>
                        <text className='home-hex-text' x='42%' y='60%'>All</text>
                    </Hexagon>
                </div>
            </div>
        </div>
    );
};

export default Hexagons;