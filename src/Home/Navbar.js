import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useLogout from "../Hooks/useLogout";
import { useNavigate } from "react-router-dom";
import logo from "../Component/Image/logo.png";

import { AuthContext } from "../Component/Context/AuthContex";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const { Logout, isPending } = useLogout();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await Logout().then(() => {
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
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
          <div className="">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link rounded-5 text-white"
                    aria-current="page"
                    to="/"
                  >
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item justify-content-end">
                  <Link
                    className="nav-link rounded-5 mt text-white nav-item justify-content-end"
                    aria-current="page"
                    to="/aboutus"
                  >
                    <b>About Us</b>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                {!currentUser ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link rounded-5 text-white"
                      aria-current="page"
                      to="/Login"
                    >
                      <b>Login</b>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link rounded-5 text-white"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      <b>Logout</b>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
