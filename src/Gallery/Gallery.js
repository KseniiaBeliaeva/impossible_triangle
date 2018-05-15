import React, { Component } from 'react';
import red from '../img/red.png';
import silver from '../img/silver.png';
import gold from '../img/gold.png';
import copper from '../img/copper.png';
import yellow from '../img/yellow.png';

import img1 from './img/c_chair.png';
import img2 from './img/heart.png';
import img3 from './img/c_chair.png';
import img4 from './img/TestArm.png';
import img5 from './img/Skull.png';


import '../App.css';
import '../App.js';
import './gallery.css';


var imgText = [
    {
        img: red,
        text: "Lorem ipsum dolor sit amet, vel dicit tamqumediocrem ex. Mei erantam" +
            "mediocrem ex. Mei erant accumsan armediocrem ex. Mei erantgumentum te, tamquam" +
            "doming offendit et eos, putant epicuri has et. An mea tritanitamquam" +
            " consequat philosophia. Quodsi abhorreant suscipiantur has ut",
    }, {
        img: silver,
        text: "test silver te quodsi latine per. Cum cetero constituto appellantur " +
            "ea. Qui at affert salutatus eloquentiam, cum tritani oporteat id.",
    }, {
        img: gold,
        text: "Lorem ipsum dolor sit amet, vel dicit tamquam mediocrem ex. Mei erant" +
            " accumsan argumentum te, tamquam mediocrem ex. Mei erant" +
            "doming offendit et eos, putant epicuri has et. An mea tritanitamquam" +
            " consequat philosophia. Quodsi abhorreant suscipiantur has ut",
    }, {
        img: copper,
        text: "test silver te quodsi latine per. Cum cetero constituto appellantur " +
            "ea. Qui at affert salutatus emediocrem ex. Mei erantloquentiam, cum tritani oporteat id.",
    }, {
        img: yellow,
        text: "Lorem ipsum dolor sit amet, vel dicit mediocrem ex. Mei erant tamquam" +
            "mediocrem ex. Mei erant accumsan mediocrem ex. Mei erant argumentum te, tamquam" +
            "doming offendit et eos, putant epicuri has et. An mea tritanitamquam" +
            " consequat philosophia. Quodsi abhorreant suscipiantur has ut"
    },
];

var imgTextBlocks = imgText.map((each) => (
    <div className="wrapper row" key={each.text.length}>
        <div className="col-sm-2">        
            <img src={each.img} className="img-circle " />
        </div>
        <div className="col-sm-10">    
            <h5 className="image-description">{each.text}</h5>
        </div>    
    </div>
));

// class Photos extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={img1} />
//                 <img src={img2} />
//                 <img src={img3} />
//                 <img src={img4} />
//                 <img src={img5} />
//             </div>
//         );
//     }
// }

class Gallery extends Component {
    render() {
        return (
            <div className="container">  
                {imgTextBlocks}
            </div>
            



        )
    }
}


export default Gallery;
