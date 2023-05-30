import React, { useEffect, useState } from "react";
import "./Classroom.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";

function Classroom() {
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
    facility.filter((item) => item.Category === "Classroom"),
    searchInput
  );

  return (
    <div className="mt-5">
      <div className="card-storage col-3">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search classrooms..."
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
      </div>
      <div className="card-storage">
        <div className="row">
          {filteredFacility.map((item, index) => (
            <div className="classroom-list" key={index}>
              <div className="card-container">
                <div className="card-hall">
                  <img
                    className="card-img-top"
                    src={item.Image}
                    alt="Classrooms"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.facility_name}</h5>
                    <p className="card-text">{item.Description}</p>
                    <Link
                      to={{
                        pathname: "/facilities",
                        state: item,
                      }}
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
      </div>
    </div>
  );
}

export default Classroom;
