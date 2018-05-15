import React, { Component } from 'react';
// import logo from './img/plastic_red.png';
import '../App.css';
import '../App.js';
import './upload.css';
import ReactFragment from 'react';

// var rows = [
//         {
//                 material: "gold",
//                 color1: 'polished',
//                 color2: 'unpolished',
//                 price1: '$600',
//                 priceSm1: '+$50<br/>',
//                 price2: '$450',
//                 priceSm2: '+$45<br/>',
//                 quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                
//         },
//         {
//                 material: "silver",
//                 color1: 'premium',
//                 color2: 'polished',
//                 color3: 'unpolished',
//                 price1: '$50',
//                 priceSm1: '+$45<br/>',
//                 price2: '$35',
//                 priceSm2: '+$45<br/>',
//                 price3: '$28',
//                 priceSm3: '+$45<br/>',
//                 quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         },
//         {
//                 material: "cooper",
//                 color1: 'polished',
//                 color2: 'unpolished',
//                 price1: '$25',
//                 priceSm1: '+$45<br/>',
//                 price2: '$10',
//                 priceSm2: '+$45<br/>',
        
//                 quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         }
// ]


class Upload extends Component {
    render() {
            return (
                    <React.Fragment>
                    <form action="#" method="post">
                            <input type="file" name="fileToUpload" id="fileToUpload" />
                            <input type="submit" value="Upload Image" name="submit" />
                            </form>
                            <h3>Choose your material</h3>                        
                            <table class="table table-hover">
                                    
                            <thead>
                                            <tr className="table-success">
                                                    <th scope="col">Material</th>
                                                    <th scope="col">Colour/Finish	</th>
                                                    <th scope="col">Price per cm³</th>
                                                    <th scope="col">Qty</th>
                                                      <th scope="col">Add to card</th>
                                    </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                                    <th scope="row" className="table-success">Gold</th>                                                    
                                                    <td> <div class="form-group">
                                                            <label for="exampleFormControlSelect1"></label>
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Select</option>
                                                                    <option>Golden</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                            </select>
                                                    </div></td>
                                                    <td>Polished 600$ + <small> 50$</small></td>
                                                    <td> <div class="form-group">
                                                            <label for="exampleFormControlSelect1"></label>
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Quantity</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                            </select></div></td>  
                                                    <td><button>Add to card</button></td>
                                    </tr>
                                    <tr>
                                                    <th scope="row" className="table-success">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                    </tr>
                                    <tr>
                                                    <th scope="row" className="table-success">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                    </tr>
                            </tbody>
                            </table>    
                            </React.Fragment>        
                    )
   }
}

export default Upload;