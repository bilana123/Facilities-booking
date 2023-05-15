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
              <div class="socialmedia">
                <h4 class="Follow">Follow Us On!!!</h4>
                <div class="social-media-icons">
                  <a href="https://www.google.com/search?gs_ssp=eJzj4tbP1TcwNDDNKy-uMGD0YsnKS00GADWqBZY&q=jnec&rlz=1C1PNKB_enBT1053BT1053&oq=jnec&aqs=chrome.1.69i57j46i512j69i59j0i512j69i60l2j69i61j69i60.2536j0j7&sourceid=chrome&ie=UTF-8">
                    <p>
                      <FaInstagram size={40} color="#C13584" />
                    </p>
                  </a>
                  <a href="https://www.facebook.com/jigmenamgyelengineeringcollege">
                    <p>
                      <FaFacebook size={40} color="#3b5998" />
                    </p>
                  </a>
                </div>
                <div className="contact-us">
                  <h4>Contact Us</h4>
                  <p>123 Main Street</p>
                  <p>Anytown, USA 12345</p>
                  <p>Email: info@example.com</p>
                  <p>Phone: 555-555-5555</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;
