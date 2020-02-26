import React, { Component } from 'react';
import { Link } from "react-router-dom"
const production = 'santahelena/herokuapp.com'
const dev = 'http://localhost:5000'
const baseUrl =(process.env.NODE_ENV ? production : dev)
//react offering router

export default class Navbar extends Component {
    render(){
        //return can return only one thing, its the api
        return (
            //errorful example (expand (O) expend (X))
            // navbar navbar-dark bg-dark navbar-expend-lg
        
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Santa Helena</Link>     
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create New Gift</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/santa" className="nav-link">Create Santa</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/manage" className="nav-link">Manage Santas</Link>
                        </li>
                    </ul>

            </div>
        </nav>
        )
    }
}