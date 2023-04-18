import React from "react";
import "./Create.css";

export default function Create() {
  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission
  }

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
      <div
        className="form-container"
        style={{
          height: "300px",
          padding: "10px",
          margin: "0 auto",
          maxWidth: "400px",
        }}
      >
        <div
          className="border border-secondary rounded p-2"
          style={{ height: "100%" }}
        >
          <div className="row ">
            <div className="col d-flex justify-content-center">
              <form onSubmit={handleSubmit} style={{ padding: "0" }}>
                <div className="group ">
                  <label htmlFor="facilityname">Facility Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="facilityname"
                    placeholder="Alpha Hall"
                    style={{ width: "350px" }}
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
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "green",
                      fontSize: "12px",
                      padding: "5px 10px",
                      width: "100px",
                    }}
                  >
                    Create
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
