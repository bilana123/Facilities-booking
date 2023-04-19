import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import copy from "../Image/copy.jpg";
//import firebase from "firebase/app";
import "firebase/firestore";
//import db, { storage } from "../firebase";

function Facilities() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setStartTime("");
    setEndTime("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., submit to a backend API
    resetForm();
  };

  return (
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
              <h5 className="card-title">MPH</h5>
              <form onSubmit={handleSubmit}>
                <div className="group">
                  <label htmlFor="startTime">Start-Time</label>
                  <input
                    type="time"
                    className="form-control rounded-3"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    placeholder="Enter time in HH:MM AM/PM format"
                  />
                </div>
                <div className="group">
                  <label htmlFor="endTime">End-Time</label>
                  <input
                    type="time"
                    className="form-control rounded-3"
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    placeholder="Enter time in HH:MM AM/PM format"
                  />
                </div>
                <div className="group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control rounded-3"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter time in MM/dd/yyyy format"
                  />
                </div>
                <div className="col-md-2 mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary booked-btn"
                    style={{ fontSize: "10px" }}
                  >
                    BOOK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
