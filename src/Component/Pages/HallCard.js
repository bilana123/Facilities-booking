import React from "react";
import ball from "../Image/ball.jpg";
import theature from "../Image/theature.jpg";
import Mph from "../Image/Mph.jpg";
import Winner from "../Image/Winner.jpg";
import foot from "../Image/foot.jpg";
import { Carousel } from "react-bootstrap";
import volleyball from "../Image/volleyball.png";
import book from "../Image/book.jpeg";
import bas from "../Image/bas.jpg";
import Alpha from "../Image/Alpha.jpg";
import Beta from "../Image/Beta.jpg";
import "./HallCard.css"
import { Link } from "react-router-dom";
function HallList() {
  const images = [
    {
      url: ball,
      caption: "",
    },
    {
      url: theature,
      caption: "",
    },
    {
      url: Mph,
      caption: "",
    },
    {
      url: Winner,
      caption: "",
    },
   
    {
      url: Beta,
      caption: "",
    },
  ];
  return (
    
    <>
      <div className="third"> 
        <div className="card-container">
        <div className="card-hall">
            <img className="card-img-top" src={Mph} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">MPH</h5>
              <p className="card-text">Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students. </p>
              <a href="#" className="btn btn-info">Learn More</a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Alpha} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Alpha Hall</h5>
              <p className="card-text">Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students. </p>
              <a href="#" className="btn btn-info">Learn More</a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Beta} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Beta Hall</h5>
              <p className="card-text">Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students. </p>
              <a href="#" className="btn btn-info">Learn More</a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={theature } alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Lecture Theatre</h5>
              <p className="card-text">Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students. </p>
              <a href="#" className="btn btn-info">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallList;
