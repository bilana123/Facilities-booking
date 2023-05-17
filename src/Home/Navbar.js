import React, { useContext } from "react";
import "./Navbar.css"; // import CSS file for the navbar
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useLogout from "../Hooks/useLogout";
import { useNavigate } from "react-router-dom";
import logo from "../Component/Image/logo.png";

import { AuthContext } from "../Component/Context/AuthContex";

export default function Navbar() {
  <Navbar />;
  const { currentUser } = useContext(AuthContext);
  const { Logout, isPending } = useLogout();
  const navigate = useNavigate();

  const handelLogout = async () => {
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
      <nav className="navbar navbar-expand-lg bg-yellow">
        <div class="container-fluid ">
          <img src={logo} alt="logo" />

          <div class="collapse navbar-collapse text-secondary" id="navbarNav">
            <li class="navbar-nav me-auto mb-20 mb-lg-0">
              <div class="nav-item mt-90 text-secondary"></div>
            </li>
            <div class="nav-item mt-90 text-secondary">
              <Link
                class="nav-link active rounded-5 text-white"
                aria-current="page"
                to="/"
              >
                <b> Home </b>
              </Link>
            </div>
            <div class="nav-item mt-90 text-secondary">
              <Link
                class="nav-link active rounded-5 text-white"
                aria-current="page"
                to="/aboutus"
              >
                <b> About Us </b>
              </Link>
            </div>

            <div class="nav-item mt-90 text-primary">
              {!currentUser ? (
                <>
                  <div class="nav-item mt-100 text-secondary">
                    <Link
                      class="nav-link active rounded-5 text-white"
                      aria-current="page"
                      to="/Login"
                    >
                      <b>LogIn </b>
                    </Link>
                  </div>
                </>
              ) : (
                <Link
                  class="nav-link active rounded-5 text-white"
                  aria-current="page"
                  onClick={handelLogout}
                >
                  <b>Logout</b>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
