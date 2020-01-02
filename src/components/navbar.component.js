import React, { Component } from 'react';
import { Link } from "react-router-dom"
import App from '../App';

//react offering router

export default class Navbar extends Component {
    render(){
        //return can return only one thing, its the api
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
                <Link to="/" className="navbar-brand">Santa Helena</Link>
            
            <div className="collapse navbar-collapse">
                {/* <ul className="">
                    <li>
                        <Link to="/" className=""></Link>
                    </li>
                </ul> */}





            </div>
            </nav>
        )
    }
}

