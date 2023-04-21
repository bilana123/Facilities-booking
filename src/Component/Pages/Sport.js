import React from "react";
import "./Classroom.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import Football from "../Image/Football.jpg";
import Basketball from "../Image/Basketball.jpg";
import Volleyball from "../Image/Volleyball.jpg";
import Lawn from "../Image/Lawn.jpg";
import Badminton from "../Image/Badminton.JPG";


function Sport() {
    const images = [
        {
            url: Basketball ,
            caption: "",
          },
        
        {
          url: Football ,
          caption: "",
        },
        {
            url: Volleyball ,
            caption: "",
          },
          {
          url: Lawn,
          caption: "",
        },
      
        {
            url:  Badminton,
            caption: "",
          },
      ];
  return (
    <>
      <div className="sport-list">
        <div className="card-container">
          <div className="card-hall">
            <img className="card-img-top" src={Football} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Football Ground</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment,
                and safety and comfort for students.
              </p>
              <Link to="/about" className="btn btn-info">Learn More</Link> {/* use Link component instead of anchor tag */}
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Volleyball} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Volleyball Court</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment,
                and safety and comfort for students.
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Basketball } alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Basketball Court</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment,
                and safety and comfort for students.
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Badminton} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Badminton Court</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment,
                and safety and comfort for students.
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Lawn} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Lawn Tennis Court</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment,
                and safety and comfort for students.
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sport;
