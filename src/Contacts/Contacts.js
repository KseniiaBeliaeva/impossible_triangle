import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './contacts.css';
import Contactform from './Contactform.js';
import topImage from '../img/header.png';
import index1 from '../img/index/1.png';
import index2 from '../img/index/1.png';
import index3 from '../img/index/1.png';
import team from '../img/team.jpg';


class Contacts extends Component {
    render() {
        return (
            <div className="container">    
                
                <div className="container-fluid text-container">
                    <img src={topImage} className="top-image" />
                    <h1 className="text-over">Contact us</h1>
                </div>    
               
                <div className="container-fluid">
                    <h4>Our contacts</h4>
                    <div className="row">
                        <div className="col-sm-6">        
                            <Contactform />
                        </div> 
                        <div className="col-sm-6">
                            <img src={team} className="fullWidth-img"/>
                        </div>
                    </div>    
                    
                </div>
            </div>
        )
    }
}


export default Contacts;
