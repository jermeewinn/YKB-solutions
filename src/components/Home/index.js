import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Home/Banner';
import LogoArray from '../Home/Logo-Array';

export default class Home extends Component {
    render() {
        return(
            <section id='home'>
                <div>
                    <Helmet>
                        <title>YKB Coaching | Home</title>
                    </Helmet>
                </div>
                <Banner />
                <LogoArray />
            </section>
        )
    }
};