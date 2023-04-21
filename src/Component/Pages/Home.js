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
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser.email);

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

export default Home;
