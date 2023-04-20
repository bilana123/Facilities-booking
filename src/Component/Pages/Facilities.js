import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import copy from "../Image/copy.jpg";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Facilities() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [location, setlocation] = useState("");
  const [Department, setDepartment] = useState("");
  const [Start_Time, setStart_Time] = useState("");
  const [End_Time, setEnd_Time] = useState("");
  const [date, setdate] = useState("");

  const [Facility, setFacility] = useState([]);
  const FacilityCollectionRef = collection(db, "Facility");

  const BOOKED = async () => {
    await addDoc(FacilityCollectionRef, {
      Username: Username,
      location: location,
      Department: Department,
      Start_Time: Start_Time,
      Email: Email,
      End_Time: End_Time,
      date: date,
    }); // add code to update the database with the booking details
  };

  useEffect(() => {
    const getFacility = async () => {
      const data = await getDocs(FacilityCollectionRef);
      setFacility(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFacility();
  }, []);

  return (
    <div>
      {Facility.map((facility) => {
        return <div key={facility.id}>{facility.name}</div>;
      })}
      <div className="container mt-5 p-5">
        <div className="card mb-3 m-5 p-5">
          <div className="row g-2">
            <div className="col-md-4 ">
              <img
                src={copy}
                className="img-fluid rounded-start w-100 h-100"
                alt="..."
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">MPH </h5>
                <div className="group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="username"
                    placeholder="Enter your username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">location</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="location"
                    placeholder="Enter your email"
                    onChange={(e) => setlocation(e.target.value)}
                  />
                  <label htmlFor="department">Department</label>
                  <select
                    className="form-select rounded-3"
                    aria-label="Default select example"
                    id="department"
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                  >
                    <option value="">Choose a department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                  <label htmlFor="start-time">Start-Time</label>
                  <input
                    type="time"
                    className="form-control rounded-3"
                    id="start-time"
                    placeholder="Enter time in HH:MM AM/PM format"
                    onChange={(e) => {
                      setStart_Time(e.target.value);
                    }}
                  />

                  <label htmlFor="end-time">End-Time</label>
                  <input
                    type="time"
                    className="form-control rounded-3"
                    id="End-time"
                    placeholder="Enter time in HH:MM AM/PM format"
                    onChange={(e) => {
                      setEnd_Time(e.target.value);
                    }}
                  />

                  <div className="group">
                    <label htmlFor="date">date</label>
                    <input
                      type="date"
                      className="form-control rounded-3"
                      id="date"
                      placeholder="Enter time in MM/dd/yyyy format"
                      onChange={(e) => {
                        setdate(e.target.value);
                      }}
                    />
                    <div className="col-md-2 mt-5">
                      <button
                        onClick={BOOKED}
                        className="btn btn-primary booked-btn"
                        style={{ fontSize: "10px" }}
                      >
                        BOOKED
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
