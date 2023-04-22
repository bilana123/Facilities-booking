import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import theature from "../Image/theature.jpg";
import Mph from "../Image/Mph.jpg";
import Alpha from "../Image/Alpha.jpg";
import Beta from "../Image/Beta.jpg";
import "./HallCard.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function HallList() {
  const [Create, setCreate] = useState("");
  const getCreate = async () => {
    const data = await getDocs(collection(db, "Facility"));
    setCreate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCreate();
  }, []);
  console.log(Create);
  const images = [
    {
      url: theature,
      caption: "",
    },
    {
      url: Mph,
      caption: "",
    },
   
    {
      url: Beta,
      caption: "",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  const filteredHalls = [
    {
      name: 'MPH',
      image: Mph,
      description: 'Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.'
    },
    {
      name: 'Alpha Hall',
      image: Alpha,
      description: 'Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.'
    },
    {
      name: 'Beta Hall',
      image: Beta,
      description: 'Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.'
    },
    {
      name: 'Lecture Theatre',
      image: theature,
      description: 'Facilitate instruction, learning, collaboration, assessment, and safety and comfort for students.'
    },
  ].filter(hall => hall.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
        <input type="text" className="form-control" placeholder="Search..." id="search-input" onChange={handleSearch} style={{ width: '200px' }}></input>
</div>
        

      <div className="third"> 
        <div className="card-container text-center">
          {filteredHalls.map(hall => (
            <div className="card-hall">
              <img className="card-img-top" src={hall.image} alt={hall.name} />
              <div className="card-body">
                <h5 className="card-title">{hall.name}</h5>
                <p className="card-text">{hall.description}</p>
                <Link to={`/hall/${hall.name}`} className="btn btn-info">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default HallList;
