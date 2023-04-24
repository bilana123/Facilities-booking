import React, { useEffect, useState } from "react";
import "./Classroom.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";


function Sport() {
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
        .filter((item) => item.Facilities === "Sports")
        .map((item, index) => (
          <div className="sport-list" key={index}>
            <div className="card-container">
              <div className="card-hall">
                <img className="card-img-top" src={item.Image} alt="poster" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.Description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Sport;
