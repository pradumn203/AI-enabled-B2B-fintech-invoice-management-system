import React, { Component } from 'react'
import './header.css'
import abclogo from './images/abc.png'
import logo from './images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div className="property" >
                <div className="image">
                    <img src={abclogo} />
                    <p className="invoice">Invoice List</p>
                </div>
                <div className="logo">
                    <img src={logo} />
                </div>  
            </div>
        )
    }
}
export default Header;
