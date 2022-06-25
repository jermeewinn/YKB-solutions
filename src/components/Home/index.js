import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return(
            <section id='home'>
                <div id='home-banner'>
                    <h1>Don't Live to Work. Work to Live.</h1>
                    <h3>Whether you're graduating from college, or have been in the workforce for awhile, we'll help with the transition </h3>
                </div>
                <div id='logo-array'>
                    <a href='/testimonials'>
                        <img src='src\assets\logos\uc_davis.png' alt='UC Davis Logo' />
                    </a>
                    <a href='/testimonials'>
                        <img src='src\assets\logos\moss_adams/pmg' alt='Moss Adams Logo' />
                    </a>
                </div>
            </section>
        )
    }
};