import React from "react";
import "./Footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <div className="sb_footer-links_div">
              <div className="socialmedia">
                <h4 className="Follow">Follow Us On!!!</h4>
                <p>
                  <FaInstagram size={40} color="#C13584" />
                </p>
                <p>
                  <FaFacebook size={40} color="#3b5998" />
                </p>
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
    </div>
  );
};

export default Footer;
