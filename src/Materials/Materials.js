import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './materials.css';
import material1 from './img/copper.png';
import material2 from './img/gold.png';
import material3 from './img/hda.png';
import material4 from './img/frosted_plastic.png';
import material5 from './img/silver.png';

var materials = [
    {
        material: material1,
        index: 1,
        alt: 'cooper'
    },
    {
        material: material2,
        index: 2,
        alt: 'Gold'
    },
    {
        material: material3,
        index: 3,
        alt: 'Hda'
    },
    {
        material: material4,
        index: 4,
        alt: 'Frosted plastic'
    },
    {
        material: material5,
        index: 5,
        alt: 'Silver'
    },
];
var materialImg = materials.map((each) => (
    <div key={each.index} className="materialImage">
        <img src={each.material} alt={each.alt} className="material" />
        <p>{each.alt}</p>
    </div>
));


class Materials extends Component {
    render() {
        return <div className="App container materialWrapper">
            {materialImg}
        </div>

    }
}

export default Materials;