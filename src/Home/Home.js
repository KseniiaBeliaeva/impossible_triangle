import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import Carousel from '../Carousel/Carousel.js';
import Steps from '../Steps/Steps.js';
import Gallery from '../Gallery/Gallery.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Steps />  

            </div>
        )
    }
}


export default Home;
