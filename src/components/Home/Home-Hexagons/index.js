import React from 'react';
import Hexagon from 'react-hexagon';

function Hexagons() {
    return(
        <container>
            <div className='home-hex-left'>
                <div id='root' className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                </div>
                <div className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: '#adb5bd',
                        }}
                    />
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                </div>
                <div className='home-hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                    <Hexagon
                        className='home-hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                </div>
            </div>
        </container>
    );
};

export default Hexagons;