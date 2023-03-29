import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"; // import CSS file for the navbar
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Component/Image/logo.png";

export default function Navbar() {
  <Navbar />;
  return (
    <div class="container">
      <nav className="navbar">
        <a className="navbar-brand"></a>
        <div class="logo">
          <img
            src={logo}
            alt="logo.png"
            style={{ width: "80px", height: "80px" }}
          />
        </div>

        <ul className="navbar-list">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
          <Link to="About us">About us</Link>
          </li>
          <li>

          <a href=" Facilities"> Facilities  </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
