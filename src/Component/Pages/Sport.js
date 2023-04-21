import React, { useState } from 'react';
import "./Classroom.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import Football from "../Image/Football.jpg";
import Basketball from "../Image/Basketball.jpg";
import Volleyball from "../Image/Volleyball.jpg";
import Lawn from "../Image/Lawn.jpg";
import Badminton from "../Image/Badminton.JPG";


function Sport() {
    const sports = [
        {
            name: "Basketball",
            image: Basketball,
            description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students."
        },
        {
            name: "Football",
            image: Football,
            description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students."
        },
        {
            name: "Volleyball",
            image: Volleyball,
            description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students."
        },
        {
            name: "Lawn Tennis",
            image: Lawn,
            description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students."
        },
        {
            name: "Badminton",
            image: Badminton,
            description: "Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students."
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(event) {
        setSearchQuery(event.target.value);
    }

    const filteredSports = sports.filter(sport => {
        return sport.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <div className="row">
            <div className="col-sm-4">
  <input type="text" className="form-control" placeholder="Search..." id="search-input" onChange={handleSearch} style={{ width: '200px' }}></input>
</div>

                <div className="sport-list">
                    <div className="card-container text-center">
                        {filteredSports.map((sport, index) => {
                            return (
                                <div className="card-hall" key={index}>
                                    <img className="card-img-top" src={sport.image} alt="poster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{sport.name}</h5>
                                        <p className="card-text">
                                            {sport.description}
                                        </p>
                                        <Link to="/about" className="btn btn-info">Learn More</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sport;
