import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import logo from '../img/logo_g.png';
import './menu.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Login from '../Login/Login.js';
import Gallery from '../Gallery/Gallery';
import Materials from '../Materials/Materials.js';
import Carousel from '../Carousel/Carousel.js';
import Contacts from '../Contacts/Contacts.js';
import Upload from '../Upload/Upload.js';




const links = [
    {
        href: "/",
        text: 'About us',
        class: 'nav-link active'
    },
    {
        href: "/gallery",
        text: 'Gallery',
        class: 'nav-link'
    },
    {
        href: "/contacts",
        text: "Contact us",
        class: 'nav-link'
    },
    // {
    //     href: "/materials",
    //     text: "Materials",
    //     class: 'nav-link'
    // },
    {
        href: "/upload",
        text: "Upload",
        class: 'nav-link menuBtn'
    }
]


const menuList = links.map((eachLink) => (    
        <li className='nav-item' key={eachLink.href.toString()}>
        <NavLink to={eachLink.href} className={eachLink.class}>{eachLink.text}</NavLink>
        </li>
    // <li className='nav-link' key={eachLink.href.toString()}><a href={eachLink.href} className="nav-link">{eachLink.text}</a></li>
));
// const menuButtons = buttons.map((eachbutton) => (
//     <li className="nav-link" key={eachbutton.href.toString()}>
//           <button className="btn btn-login button"><NavLink to={eachbutton.href}>{eachbutton.text}</NavLink></button>
//     </li>

// ));
class Menu extends Component {
    render() {
        return (
            <div className="justify-content-between row">
        <div className="col-sm-2">
                <a className="navbar-brand" href="index.html">
                        <img src={logo} className="img-logo" alt="company's logo" />
                    </a>    
                </div >
                <div className="col-sm-8 horizontalText">
                    <ul className="nav justify-content-end">
                        {menuList}    
                        <li className='nav-item'>
                            <Login />
                        </li>  
                    </ul>        
                </div>
              
        </div>    
    )}    
}


export default Menu;