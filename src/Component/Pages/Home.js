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



function Home() {
 
  const images = [
    {
      url: ball,
      caption: "",
    },
    {
      url: theature,
      caption: "Lecture Theature",
    },
    {
      url: Mph,
      caption: "MPHall ",
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
              height="100"
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
          <div className="home-card">
            <div className="card-container d-flex justify-content-center">
              <div className="card-container text-center">
                <div className="card-hall">
                  <img className="card-img-top" src={theature} alt="poster" />
                  <div className="card-body">
                    <h5 className="card-title">Halls</h5>
                    <p className="card-text">
                      Facilitate instruction, learning, collaboration,
                      assessment, and safety and comfort for students.
                    </p>
                    <Link to="/HallCard" className="btn btn-info">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-hall">
                  <img className="card-img-top" src={ball} alt="poster" />
                  <div className="card-body">
                    <h5 className="card-title">Sports </h5>
                    <p className="card-text">
                      Facilitate instruction, learning, collaboration,
                      assessment, and safety and comfort for students.
                    </p>
                    <Link to="/Sport" className="btn btn-info">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-hall">
                  <img className="card-img-top" src={book} alt="poster" />
                  <div className="card-body">
                    <h5 className="card-title">Classrooms</h5>
                    <p className="card-text">
                      Facilitate instruction, learning, collaboration,
                      assessment, and safety and comfort for students.
                    </p>
                    <Link to="/Classroom" className="btn btn-info">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
