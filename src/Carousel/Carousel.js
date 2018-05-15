import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './carousel.css';
import firstslide from './img/c1.png';
import secondslide from './img/c6.png';
import thirdslide from './img/c7.png';


/*Text over an img*/
var textOverImg = <div className="uploadButton">
    <h2>Bring Your Product Ideas to Life</h2>
    <button type="button" className="btn">Start creating</button>
</div>;

/*Carousel items*/
var carousel = [
    {
        imgLink: firstslide,
        altText: 'first slide',
        index: 0,
        className: "carousel-item active"
    },
    {
        imgLink: secondslide,
        altText: 'second slide',
        index: 1,
        className: "carousel-item"
    },
    {
        imgLink: thirdslide,
        altText: 'third slide',
        index: 2,
        className: "carousel-item"
    }
];

var carouselItem = carousel.map((eachCarousel) => (
    <div className={eachCarousel.className} key={eachCarousel.index}>
        <img className="d-block w-100" src={eachCarousel.imgLink} alt={eachCarousel.text} />
    </div>
 ));

/*Carousel controls*/
var control = [
    {
        dataSlide: 'prev',
        controlText: 'Previous',
    },
    {
        dataSlide: 'next',
        controlText: 'Next',
    }
   
];
var controlItem = control.map((eachControl) => (
    <a key={eachControl.controlText} className={"carousel-control-" + eachControl.dataSlide + ""} href="#carouselControls"
    role="button" data-slide={eachControl.dataSlide}>
    <span className={"carousel-control-" + eachControl.dataSlide + "-icon"} aria-hidden="true"></span>
    <span className="sr-only">{eachControl.controlText}</span></a>
));


class Carousel extends Component {
render() {
    return <div id="carouselControls" className="carousel slide" data-ride="carousel">
                {textOverImg}
        <div className="carousel-inner">
                {carouselItem}
              </div>
                {controlItem}
		    </div>
    }
}
                
export default Carousel;