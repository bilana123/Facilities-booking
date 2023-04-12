import React from "react";
import "./Create.css";

export default function Create() {
  return (
    <div
      className="container justify-content-center mt-5"
      id="id_for_admin_div"
    >
      <div className="row">
        <div className="col mt-5">
          <h1>Create Facilities</h1>
        </div>
      </div>
      <br />
      <div
        className="border border-secondary rounded p-10"
        style={{ height: "400px" }}
      >
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <form>
              <div className="group">
                <label htmlFor="facilityname">Facility Name</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="facilityname"
                  placeholder="Alpha Hall"
                  style={{ width: "350px" }} // Increase input field width
                />
              </div>
              <div className="group">
                <label htmlFor="Selectimage">Select Image</label>
                <input
                  type="file"
                  className="form-control rounded-3"
                  id="Selectimage"
                  placeholder="insert image"
                />
              </div>
              <div className="group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  className="form-control rounded-3"
                  id="time"
                  placeholder="Enter time in HH:MM AM/PM format"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
