import React from "react"
import './Footer.css'
//import ball from "./Component/Images/ball.jpg";

const Footer = () => <footer className="page-footer font-big white pt-4">
    <div className="container-fluid text-left text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 bg-dark">
            <h5 className="text-uppercase">WEBMASTER</h5> 
            <li><a href="#!">Email:05210217.jnec@rub.edu.bt </a></li>
            <h5>Phone:+975-77271922</h5> //

             </div>

            <hr className="clearfix w-1000 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 bg-dark">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 bg-dark">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

export default Footer