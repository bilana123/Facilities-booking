import React, { useEffect, useState } from "react";
import "./HallCard.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function HallList({ currentUser }) {
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
    <div>
      {facility
        .filter((item) => item.Facilities === "Halls")
        .map((item, index) => (
          <div className="card-hall" key={index}>
            <img className="card-img-top" src={item.Image} alt="poster" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.Description}</p>
              <a href="#" className="btn btn-info">
                Learn More
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HallList;
