import React from 'react'
import { Link } from "react-router-dom";

import ball from '../Image/ball.jpg';
import theature from '../Image/theature.jpg';
import Mph from '../Image/Mph.jpg';
import Winner from '../Image/Winner.jpg';

import { Carousel } from "react-bootstrap";



function Home() {
 
  
  const images = [
    {
      url:ball,
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
      url:Winner,
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

    </>
  );
}




export default Home
