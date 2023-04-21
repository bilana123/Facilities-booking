import React, { useState } from 'react';
import "./Classroom.css";
import { Carousel } from "react-bootstrap";
import ball from "../Image/ball.jpg";
import theature from "../Image/theature.jpg";
import Mph from "../Image/Mph.jpg";
import Winner from "../Image/Winner.jpg";
import foot from "../Image/foot.jpg";
import volleyball from "../Image/volleyball.png";
import book from "../Image/book.jpeg";
import bas from "../Image/bas.jpg";

function Classroom() {
  const classrooms = [
    {
      name: "Room 1",
      description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.",
    },
    {
      name: "Classrooms",
      description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.",
    },
    {
      name: "OCR",
      description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  const filteredClassrooms = classrooms.filter((classroom) =>
    classroom.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="row">
        <div className="col-sm-8">
        <input type="text" className="form-control" placeholder="Search..." id="search-input" onChange={handleSearch} style={{ width: '200px' }}></input>
</div>
      <div className="classroom-list">
        <div className="card-container text-center">
          {filteredClassrooms.map((classroom, index) => (
            <div className="card-hall" key={index}>
              <img className="card-img-top" src={book} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">{classroom.name}</h5>
                <p className="card-text">{classroom.description}</p>
                <a href="#" className="btn btn-info">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Classroom;
