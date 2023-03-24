 import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Navbar.css'; // import CSS file for the navbar
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Component/Image/logo.png";
import lhaden from  "../Component/Image/lhaden.jpg";


export default function Navbar() {
    <Navbar/>
  return (
    <div class="container">
       
    <nav className="navbar">
     <a className="navbar-brand" >
   
      </a>
      <div class="logo">
     
       <img src={logo} alt="logo.png" height="2px" width="2px" />
       
   </div>
    
      <ul className="navbar-list">
      <li><a href="Home">Home</a></li>
      <li><a href="About us">About us</a></li>
       <li class="dropdown">
      <a href="#">Facilities <span>&#x25BC;</span></a>
      <ul class="dropdown-menu">
        <li><a href="Alpha Hall">Alpha Hall</a></li>
        <li><a href="Sport complex">Sport complex</a></li>
        <li><a href="Beta Hall">Beta Hall</a></li>
        <li><a href="Lecture threater">Lecture threater</a></li>
        <li><a href="MPH booking">MPH booking</a></li>
      </ul>
    </li>
    
       <li><a href="Login">Login</a></li>
        <li><a href="Register">Register</a></li>
        
    </ul>
    
    </nav>
    
    </div>
    
    
    
 );
}
 