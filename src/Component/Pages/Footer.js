import React from "react";
import "./Footer.css";

<<<<<<< HEAD

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
           
=======
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div"> 
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
          </div> 
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resources">
              <p>Resources Center</p>
            </a>
            <a href="/resources">
              <p>Testimonials</p>
            </a>
            <a href="/resources">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <div className="socialmedia">
              <h4>Coming Soon On</h4>
              <p><FaFacebook size={40} color="#3b5998" /></p>
              <p><FaInstagram size={40} color="#C13584" /></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All rights reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declarations</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;