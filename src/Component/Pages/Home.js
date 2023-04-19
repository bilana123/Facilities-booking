import React from "react";
import ball from "../Image/ball.jpg";
import theature from "../Image/theature.jpg";
import Mph from "../Image/Mph.jpg";
import Winner from "../Image/Winner.jpg";
import foot from "../Image/foot.jpg";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import volleyball from "../Image/volleyball.png";
import book from "../Image/book.jpeg";
import bas from "../Image/bas.jpg";

function Home() {
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
  ];
  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block img-fluid w-100"
              height="40"
              src={image.url}
              alt={`Slide ${index}`}
              style={{ objectFit: "cover", height: "510px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 id="caption_of_the_image">{image.caption}</h5>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="billlu">
        <h1>Explore our facilities</h1>
        <div className="second"> 
          <div className="card-container">
            <div className="card">
              <img className="card-img-top" src={book} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">MPH</h5>
                <p className="card-text"> Provide a convenient and adaptable space that can cater to a wide range of events and activities, making it an important asset for many organizations and communities with up to 800 people.</p>
                <a href="here" className="btn btn-info">
                  Book Now
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={bas} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">Basket Ball Ground</h5>
                <p className="card-text">Basket Ball Ground is equipped with state-of-the-art equipment for all your fitness needs.</p>
                <a href="here" className="btn btn-info">
                  Book Now
                </a>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={bas} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">Basket Ball Ground</h5>
                <p className="card-text">Basket Ball Ground is equipped with state-of-the-art equipment for all your fitness needs.</p>
                <a href="here" className="btn btn-info">
                  Book Now
                </a>
              </div>
            </div>


            <div className="card">
              <img className="card-img-top" src={foot} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">Football Ground</h5>
                <p className="card-text">Football Ground has multiple soccer fields for all your team's practice and game needs.</p>
                <a href="here" className="btn btn-info">
                  Book Now
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={volleyball} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">Volly Court</h5>
                <p className="card-text">Volly Court is perfect for volleyball tournaments and practices.</p>
                <a href="here" className="btn btn-info">
                  Book Now
                </a>
             

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
