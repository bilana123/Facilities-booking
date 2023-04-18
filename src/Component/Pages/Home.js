import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
      caption: "tg,mrbhwjekfeh2uo",
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
        <div id="you">
          <img
            src={foot}
            alt="foot.jpg"
            style={{ borderRadius: "20%", width: "150px", height: "150px" }}
          />
          <div className="love">
            <img
              src={volleyball}
              alt="volleyball.jpg"
              style={{ borderRadius: "20%", width: "150px", height: "150px" }}
            />
          </div>
          <div className="bil">
            <img
              src={book}
              alt="copy.jpg"
              style={{ borderRadius: "20%", width: "150px", height: "150px" }}
            />
          </div>
          <div className="photo">
            <img
              src={bas}
              alt="bas.jpg"
              style={{ borderRadius: "20%", width: "150px", height: "150px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
