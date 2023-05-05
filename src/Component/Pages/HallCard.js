import React, { useEffect, useState } from "react";
import "./HallCard.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function HallList({ currentUser }) {
  const [facility, setFacility] = useState([]);
  const [filteredFacility, setFilteredFacility] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getFacilityData = async () => {
      const facilitySnapshot = await getDocs(collection(db, "Facility"));
      const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
      setFacility(facilityList);
      setFilteredFacility(facilityList);
    };
    getFacilityData();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilteredFacility(
      facility.filter(
        (item) =>
          item.Facilities === "Halls" &&
          item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  if (facility.length === 0) {
    return <div>Loading...</div>;
  }

  if (filteredFacility.length === 0) {
    return <div>No halls found.</div>;
  }

  return (
    <div>
      {facility
        .filter((item) => item.Facilities === "Halls")
        .map((item, index) => (
          <div className="card-hall" key={index}>
            <img className="card-img-top" src={item.Image} alt="poster" />
            <div className="card-body">
              {item.Facilities}
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.Description}</p>
              <Link to="/facilities" className="btn btn-info">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HallList;
