import React from 'react';
import Working from '../../../assets/stockPhotos/Working.jpg';

function Banner() {
    return(
        <container className='home-banner'>
            <div className='home-banner-left'>
                <div className='home-banner-text'>
                    <div className='my-5 home-banner-title'>Don't Live to Work. <br/>Work to Live.</div>
                    <h5 className='my-5 home-banner-subtext'>Work with us and we'll work with you.</h5>
                </div>
            </div>
            {/* <div></div> */}
            <div className='home-banner-right' 
            style={{ 
                backgroundImage: `url(${Working})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}
            ></div>
        </container>
    );
};

export default Banner;