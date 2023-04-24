import React from "react";
import "./Navbar.css"; // import CSS file for the navbar
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Component/Image/logo.png";

export default function Navbar() {
  <Navbar />;
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <img src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-secondary" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item mt-90 text-secondary"></div>
            </ul>
            <div className="nav-item mt-90 text-secondary">
              <Link
                className="nav-link active rounded-5 px-4"
                aria-current="page"
                to="/"
              >
                <b> Home </b>
              </Link>
            </div>

            <div className="nav-item mt-90 text-secondary">
              <Link
                className="nav-link active rounded-5 px-4"
                aria-current="page"
                to="/aboutus"
              >
                <b> Aboutus </b>
              </Link>
            </div>

            <div className="nav-item mt-90 text-secondary">
              <Link
                className="nav-link active rounded-5"
                aria-current="page"
                to="/Login"
              >
                <b>Login </b>
              </Link>
            </div>

            <div className=" text-secondary">
              <Link
                className="nav-link active rounded-5"
                aria-current="page"
                to="/Signup"
              >
                <b>Sign Up</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

         