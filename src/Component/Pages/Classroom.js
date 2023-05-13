import React, { useEffect, useState } from "react";
import "./Classroom.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";
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
    <div className="card-storage">
      {/* <div className="first"> */}
      <div className="card-storage">
        {facility
          .filter((item) => item.Category === "Classroom")
          .map((item, index) => (
            <div className="classroom-list" key={index}>
              <div className="card-container">
                <div className="card-hall">
                  <img
                    className="card-img-top"
                    src={item.Image}
                    alt="Classrooms"
                  />
                  <div className="card-body">
                    {item.facility_Name}
                    <h5 className="card-title">{item.facility_name}</h5>
                    <p className="card-text">{item.Description}</p>
                    <Link
                      to="/facilities"
                      state={item}
                      className="btn btn-info"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Classroom;
