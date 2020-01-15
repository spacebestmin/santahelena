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
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create New Gift</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Create Santa</Link>
                        </li>
                    </ul>

            </div>
        </nav>
        )
    }
}

