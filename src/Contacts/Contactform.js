import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './contacts.css';

var contacts = [
    {
        label: 'Name',
        inputType: 'text',
        placeholder: 'Your name',
        index: 1
    },
    {
        label: 'Email address',
        inputType: 'email',
        placeholder: 'Enter email',
        index: 2

    }
]
var contactForm = contacts.map((each) => (
    <div className="form-group" key={each.index}>
        <label>{each.label}</label>
        <input type={each.inputType} className="form-control" placeholder={each.placeholder} />
        <span> {each.additionalElement}</span>
    </div>
));


class Form extends Component {
    render() {
        return (
            <form className="form-block">
                {contactForm}
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="3" placeholder="What can we help you with?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
