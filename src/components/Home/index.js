import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Home-Banner';
import Hexagons from './Home-Hexagons';
import LogoArray from './Home-Logo-Array';


export default class Home extends Component {
    render() {
        return(
            <section id='home'>
                <Helmet>
                    <title>YKB Coaching | Home</title>
                </Helmet>
                <Banner />
                <Hexagons />
                <LogoArray />
            </section>
        )
    }
};