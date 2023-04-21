import React, { useState } from 'react';
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
import { Link } from "react-router-dom";


function Alpha() {
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
  const [searchQuery, setSearchQuery] = useState('');
 

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    // Perform search operation using the searchQuery state value

    
  }
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
            <div className="alpha-popup">
              <h5 id="caption_of_the_image">{image.caption}</h5>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
  
 
    <h1>Explore our facilities</h1>

    </>
  );
}

export default Alpha;
