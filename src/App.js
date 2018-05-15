// import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
  Route,
  HashRouter
} from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu.js';
import Login from './Login/Login.js';
import Gallery from './Gallery/Gallery';
import Materials from './Materials/Materials.js';
import Carousel from './Carousel/Carousel.js';
import Contacts from './Contacts/Contacts.js';
import Upload from './Upload/Upload.js';
import Home from './Home/Home.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App container">
          <div className="content">
            <Menu></Menu>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/contacts" component={Contacts} />
            <Route path="/upload" component={Upload} />
            <Route path="/gallery" component={Gallery} />
            {/* <Route path="/materials" component={Materials} /> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
