import React, { Component } from 'react';
import { Link } from "react-router-dom"

//react offering router

export default class Navbar extends Component {
    render(){
        //return can return only one thing, its the api
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
            <Link to="/" className="navbar-brand">Santa Helena</Link>     
            <div className="collapse navbar-collapse">
                <ul className="navebar-nav">
                    <li className="navbar-item">
                        <Link to="/create" className="">Create New Gift</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="">Create Santa</Link>
                    </li>
                </ul>

            </div>
            </nav>
        )
    }
}

