import React from "react";
import "./Navbar.css"; // import CSS file for the navbar
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Component/Image/logo.png";

export default function Navbar() {
  <Navbar />;
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-yellow">
        <div class="container-fluid">
          <img src={logo} alt="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-secondary" id="navbarNav">
            <li class="navbar-nav me-auto mb-20 mb-lg-0">
              <div class="nav-item mt-90 text-secondary"></div>
            </li>
            <div class="nav-item mt-90 text-secondary">
              <Link
                class="nav-link active rounded-5"
                aria-current="page"
                to="/Home"
              >
                <b> Home </b>
              </Link>
            </div>

            <div class="nav-item mt-90 text-secondary">
              <Link
                class="nav-link active rounded-5"
                aria-current="page"
                to="/Facilities"
              >
                <b> Facilities </b>
              </Link>
            </div>

            <div class="nav-item mt-90 text-secondary">
              <Link
                class="nav-link active rounded-5"
                aria-current="page"
                to="/Login"
              >
                <b>Login </b>
              </Link>
            </div>

            <div class=" text-secondary">
              <Link
                class="nav-link active rounded-5"
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
