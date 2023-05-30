import React from "react";
import "./Footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer container-fluid bg-dark">
      <div className="row text-center">
        <div className="col text-center">
          <div className="Email text-white mt-5 text-center">
            <h4>Contact Us</h4>
            <p>Email: webmaster@jnec.edu.bt</p>
            <p>Phone: +975-260-192</p>
          </div>
          <hr className="text-white" />
        </div>
        <div className="row">
          <div className="col">
            <div className="socialmedia">
              <h4 className="Follow text-white">Follow Us On!!!</h4>
              <div className="social-media-icons">
                <span>
                  <a href="https://www.google.com/search?gs_ssp=eJzj4tbP1TcwNDDNKy-uMGD0YsnKS00GADWqBZY&q=jnec&rlz=1C1PNKB_enBT1053BT1053&oq=jnec&aqs=chrome.1.69i57j46i512j69i59j0i512j69i60l2j69i61j69i60.2536j0j7&sourceid=chrome&ie=UTF-8">
                    <FaInstagram size={40} color="#C13584" />
                  </a>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="">
                  <a href="https://www.facebook.com/jigmenamgyelengineeringcollege">
                    <FaFacebook size={40} color="#3b5998" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
