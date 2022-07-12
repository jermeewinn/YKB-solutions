import React, { Component } from 'react';
import Banner from '../Home/Banner';
import LogoArray from '../Home/Logo-Array';

export default class Home extends Component {
    render() {
        return(
            <section id='home'>
                <Banner />
                <LogoArray />
            </section>
        )
    }
};