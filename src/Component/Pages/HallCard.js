import React, { useEffect, useState } from "react";
import "./HallCard.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function HallCard({ currentUser }) {
  const [facility, setFacility] = useState([]);

  const getFacilityData = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
  };

  useEffect(() => {
    getFacilityData();
  }, []);

  return (
    <div className="card-container">
      <div className="row">
        {facility
          .filter((item) => item.Category === "Halls")
          .map((item, index) => (
            <div className="col-sm-4" key={index}>
              <div className="card-hall">
                <img className="card-img-top" src={item.Image} alt="poster" />
                <div className="card-body">
                  {item.facility_Name}
                  <h5 className="card-title">{item.facility_name}</h5>
                  <p className="card-text">{item.Description}</p>
                  <Link to="/facilities" className="btn btn-info">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HallCard;
