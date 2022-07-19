import React from 'react';
import Hexagon from 'react-hexagon';

function Hexagons() {
    return(
        <container>
            <div id='root' className='hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}
                />
            </div>
            <div className='hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'white',
                    }}
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}                    
                />
            </div>
            <div className=' hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}                    
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}
                />
            </div>
        </container>
    );
};

export default Hexagons;