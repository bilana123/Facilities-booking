import React, { useEffect, useState } from "react";
import "./HallCard.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function HallCard({ currentUser }) {
  const [facility, setFacility] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getFacilityData = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
  };

  useEffect(() => {
    getFacilityData();
  }, []);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterFacilityBySearchInput = (facilityList, searchInput) => {
    if (!searchInput) {
      return facilityList;
    }

    return facilityList.filter((item) =>
      item.facility_name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const filteredFacility = filterFacilityBySearchInput(
    facility.filter((item) => item.Category === "Hall"),
    searchInput
  );

  return (
    <div className="mt-5">
      <div className="card-storage col-3">
        <div className="search-bar  text-center">
          <input
            type="text"
            placeholder="Search halls..."
            value={searchInput}
            onChange={handleSearchInput}
            size={30}
          />
        </div>
      </div>
      <div className="card-storage">
        <div className="row">
          {filteredFacility.map((item, index) => (
            <div className="col-sm-4" key={index}>
              <div className="card-hall">
                <img className="card-img-top" src={item.Image} alt="poster" />
                <div className="card-body">
                  {item.facility_Name}
                  <h5 className="card-title">{item.facility_name}</h5>
                  <p className="card-text">{item.Description}</p>
                  <Link to="/facilities" state={item} className="btn btn-info">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HallCard;
