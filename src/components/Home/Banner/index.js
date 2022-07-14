import React from 'react';
import Working from '../../../assets/stockPhotos/Working.jpg';

function Banner() {
    return(
        <container className='home-banner'>
            <div className='home-banner-left'>
                <div className='home-banner-text'>
                    <h1 className='my-5'>Don't Live to Work. Work to Live.</h1>
                    <h5 className='my-5 home-banner-subtext'>Work with us and we'll work with you.</h5>
                </div>
            </div>
            <div></div>
            <div className='home-banner-right' 
            style={{ backgroundImage: `url(${Working})`}}
            ></div>
        </container>
    )
}

export default Banner;