import React, { useEffect, useState } from "react";
import "./Classroom.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Classroom() {
  const [facility, setFacility] = useState([]);

  const getFacilityData = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
  };

  useEffect(() => {
    getFacilityData();
  }, []);

  console.log(facility);

  return (
    <>
      {facility
        .filter((item) => item.Facilities === "Classrooms")
        .map((item, index) => (
          <div className="classroom-list" key={index}>
            <div className="card-container">
              <div className="card-hall">
                <img
                  className="card-img-top"
                  src={item.Image}
                  alt="Classrooms"
                />
                <h5 className="card-title">{item.facility_name}</h5>
                <p className="card-text">{item.Description}</p>
                <a href="#" className="btn btn-info">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Classroom;
