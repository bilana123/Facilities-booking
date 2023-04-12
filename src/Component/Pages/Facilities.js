import React from "react";
import Mph from "../../Component/Image/Mph.jpg";
import "./Facilities.css";

export default function Facilities() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="card mb-4 mx-3 borders" style={{ maxWidth: "540px", minWidth: "300px" }}>
        <div className="row g-0 flex-row align-items-center">
          <div className="col-md-4">
            <img
              src={Mph}
              className="img-fluid rounded-start w-100 h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">MPH Booking</h5>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  placeholder="enter time in HH:MM AM/PM --HH:MM AM/PMformat"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  placeholder="enter time in dd/mm/yyyy format"
                />
              </div>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4 mx-3 borders" style={{ maxWidth: "540px", minWidth: "300px" }}>
        <div className="row g-0 flex-row align-items-center">
          <div className="col-md-4">
            <img
              src={Mph}
              className="img-fluid rounded-start w-100 h-100"
              alt="..."
            />
          </div>
          <div className="col-md-2">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  placeholder="enter time in HH:MM AM/PM --HH:MM AM/PMformat"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  placeholder="enter time in dd/mm/yyyy format"
                />
              </div>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
