import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Facilities() {
  const [facility_Name, setfacility_Name] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [name, setName] = useState("");
  const [programme, setProgramme] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [Users, setUsers] = useState([]);

  const BOOK = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Users"), {
        facility_Name: facility_Name,
        name: name,
        contactNo: contactNo,
        programme: programme,
        startTime: startTime,
        email: email,
        endTime: endTime,
        startDate: startDate,
        endDate: endDate,
        status: "pending",
      });
      console.log("Document written with ID: ", docRef.id);
      const button = document.getElementById("book-button");
      if (button) {
        button.innerHTML = "BOOKED";
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "Users"));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      {Users.map((users) => {
        return <div key={users.id}>{Users.facility_Name}</div>;
      })}
      <div className="bg-white shadow-lg-3">
        <div className="row g-0"></div>
        <div className="col-md-6 offset-md-2">
          <div className="bg-white shadow-lg-5 m-5">
            <form onSubmit={BOOK}>
              <div className="mb-1">
                <label htmlFor="facility_Name" className="form-label">
                  Facility Name
                </label>
                <input
                  type="text"
                  value={facility_Name}
                  className="form-control rounded-3"
                  id="facility_Name"
                  placeholder="Enter the facility name"
                  onChange={(e) => {
                    setfacility_Name(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  required
                  className="form-control rounded-3"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="contactNo" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  value={contactNo}
                  required
                  className="form-control rounded-3"
                  id="contactNo"
                  placeholder="Enter your contact number"
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  required
                  className="form-control rounded-3"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="Programme" className="form-label">
                  Programme
                </label>
                <select
                  className="form-select rounded-3"
                  value={programme}
                  required
                  aria-label="Default select example"
                  id="programme"
                  onChange={(e) => {
                    setProgramme(e.target.value);
                  }}
                >
                  <option value="">Choose a Programme</option>
                  <option value="Computer System And Networking">
                    Computer System And Networking
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Materials And Procurement Management">
                    Materials And Procurement Management
                  </option>
                  <option value="Machnical Engneering">
                    Machnical Engneering
                  </option>
                  <option value="Electrical Enginnering">
                    Electrical Enginnering
                  </option>
                  <option value="Electronic And Communication">
                    Electronic And Communication
                  </option>
                  <option value="Surveying">Surveying</option>
                  <option value="B.E in Power Engineering">
                    B.E in Power Engineering
                  </option>
                  <option value="B.E in Mechanical Engineering">
                    B.E in Mechanical Engineering
                  </option>
                  <option value="B.E in Surveying and Geoinformatics">
                    B.E in Surveying and Geoinformatics
                  </option>
                </select>
              </div>
              <div className="mb-1">
                <label for="start-time" className="form-label">
                  Start-Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  required
                  className="form-control rounded-3"
                  id="start-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setStartTime(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="end-time" className="form-label">
                  End-Time
                </label>
                <input
                  type="time"
                  value={endTime}
                  required
                  className="form-control rounded-3"
                  id="end-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setEndTime(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="Start_date" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  required
                  className="form-control rounded-3"
                  id="Start_date"
                  placeholder="Enter time in MM/dd/yyyy format"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="End_date" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  required
                  className="form-control rounded-3"
                  id="End_date"
                  placeholder="Enter time in MM/dd/yyyy format"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-5 mt-2 w-5">
                <button
                  className="btn btn-primary booked-btn"
                  style={{ fontSize: "15px" }}
                  type="submit"
                  id="book-button"
                >
                  BOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
