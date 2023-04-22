import React, { useEffect, useState } from "react";

import theature from "../Image/theature.jpg";

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

  return (
    <div>
      {Array.isArray(Create) &&
        Create.map((Create) => {
          return <div key={Create.id}>{Create.name}</div>;
        })}
      <div className="card-hall">
        <img className="card-img-top" src={Create.Image} alt="poster" />
        <div className="card-body">
          <h5 className="card-title">{Create.facility_name}</h5>
          <p className="card-text">{Create.description} </p>
          <a href="./Facilities" className="btn btn-info">
            Learn More
          </a>
        </div>
      </div>

      <div className="third">
        <div className="card-container">
          <div className="card-hall">
            <img className="card-img-top" src={Alpha} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Alpha Hall</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment, and
                safety and comfort for students.{" "}
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={Beta} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Beta Hall</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment, and
                safety and comfort for students.{" "}
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
          <div className="card-hall">
            <img className="card-img-top" src={theature} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">Lecture Theatre</h5>
              <p className="card-text">
                Facilitate instruction, learning, collaboration, assessment, and
                safety and comfort for students.{" "}
              </p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HallList;
