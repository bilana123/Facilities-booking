import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Component/Image/logo.png";

// add the style to the CSS file or inside the component
const navbarStyle = {
  backgroundColor: " #e3ef5e",
};

export default function Navbar(props) {
  const navbarStyle = {
    backgroundColor: "#f1e378"
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
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
                to="/Home"
              >
                <b> Home </b>
              </Link>
            </div>

            <div className="nav-item mt-90 text-secondary">
              <Link
                className="nav-link active rounded-5 px-4"
                aria-current="page"
                to="/Facilities"
              >
                <b> Facilities </b>
              </Link>
            </div>

            <div className="nav-item mt-90 text-secondary">
              <Link
                className="nav-link active rounded-5 px-4"
                aria-current="page"
                to="/Login"
              >
                <b>Login </b>
              </Link>
            </div>

            {props.isAuthenticated ? (
              <></>
            ) : (
              <div className=" text-secondary">
                <Link
                  className="nav-link active rounded-5 px-4"
                  aria-current="page"
                  to="/Signup"
                >
                  <b>Sign Up</b>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

         