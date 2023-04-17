import React from "react";
import "./Footer.css";


const Footer = () => (
  <footer className="page-footer font-big white pt-4">
      <div className="md:flex md:justify-between md:items-center sm:px-4 bg-[#ffffff19] py-7 ">
      <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb:6 lg:leading-normal font-semibold md:w-2/5"><span className="text-teal-400">Free</span>untill you're ready to launch</h1>
      <div className="row">
        <div className="col mt-3 bg-dark">
          <h5 className="text-uppercase text-center">WEBMASTER</h5>
          <li>
            <a className="text-center " href="#!">Email:05210217.jnec@rub.edu.bt </a><br></br>
            <a className="text-center fa fa-phone fa-lg" href="#!">Phone:+975- </a>
            
          </li>
          <h5>Phone:+975-77271922</h5> //
          <div className="footer-copyright text-center py-3">
           
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
