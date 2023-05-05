import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";

function Search() {
  const { facility_name } = useParams();
  const [facilityList, setFacilityList] = useState([]);
  const [filteredFacility, setFilteredFacility] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getFacilityData = async () => {
      const facilitySnapshot = await getDocs(collection(db, "Facility"));
      const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
      setFacilityList(facilityList);
    };
    getFacilityData();
  }, []);

  useEffect(() => {
    const filteredList = facilityList.filter((facility) =>
      facility.facility_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFacility(filteredList);
  }, [facilityList, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search halls..."
      />
      {filteredFacility.map((item, index) => (
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
      ))}
    </div>
  );
}

export default Search;
