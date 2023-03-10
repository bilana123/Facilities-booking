 import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Navbar.css'; // import CSS file for the navbar
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Navbar() {
    <Navbar/>
  return (
    <div class="container">
       
    <nav className="navbar">
    <a className="navbar-brand" href="/">
    <img src="jnec\public\logo.png" alt="Logo" width="50" height="50" />
      </a>
   
    <header id="header" class="header-two"></header>
      <ul className="navbar-list">
      <li><a href="About us">Home</a></li>
        <li><a href="About us">About us</a></li>
        <li><a href="Login">Login</a></li>
        <li><a href="Register">Register</a></li>
        <li><a href="Account">Account</a></li>
    </ul>
    </nav>
    </div>
 );
}
 