import React from 'react'
import './Header.css';
import logo from './logo.svg';
import { Link } from "react-router-dom";


export default function Header() {
    let fontstyle = 
    {
        color: "#444444"

    }
    return (
        <nav className="navbar navbar-light nav-header sticky-top">
            <div className="container-fluid">
                <Link className="text-decoration-none fs-3 fw-bold" style={fontstyle}>
                <img src={logo} alt="" width="40vw" height="40vw" class="img-fluid rounded-circle mx-1"/>
                MISSIONED
                </Link>
                <Link className="btn btn-success d-flex" type="submit" to="/login">Login</Link>
            </div>
        </nav>
    ) 
}
