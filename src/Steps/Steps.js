import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './steps.css';
import step1 from './img/step1.png';
import step2 from './img/step2.png';
import step3 from './img/step3.png';
import step4 from './img/step4.png';
import step5 from './img/step5.png';

var steps = [
    {
        step: step1,
        index: 1,
        alt: 'Find your favorite design'
    },
    {
        step: step2,
        index: 2,
        alt: 'Or ask our designers to help you'
    },
    {
        step: step3,
        index: 3,
        alt: 'Upload the design to our website'
    },
    {
        step: step4,
        index: 4,
        alt: 'Once you\'ve uploaded, we will print it within 48 hours'
    },
    {
        step: step5,
        index: 5,
        alt: 'Relax and wait for your shipment'
    },
];
var stepImg = steps.map((each) => (
    <div key={each.index} >
    <img src={each.step} alt={each.alt} className="stepsImage"/>
        <p>{each.alt}</p>
    </div>    
));


class Steps extends Component {
    render() {
        return <div className="stepsWrapper">
            {stepImg}
        </div>
        
    }
}

export default Steps;