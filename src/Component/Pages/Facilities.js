import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Facilities() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Location, setLocation] = useState("");
  const [Department, setDepartment] = useState("");
  const [Start_Time, setStart_Time] = useState("");
  const [End_Time, setEnd_Time] = useState("");
  const [date, setdate] = useState("");
  const [Facility, setFacility] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUsers(usersList);
    };

    getUsers();
  }, []);

  const handleBook = async () => {
    const startDateStr = document.getElementById("start-date-time").value;
    const endDateStr = document.getElementById("end-date-time").value;

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (endDate < startDate) {
      alert("End date and time cannot be before start date and time.");
      document.getElementById("end-date-time").value = "";
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "Users"), {
        Facility_Name: Facility_Name,
        location: location,
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

  const BOOK = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        Facility_Name: Facility_Name,
        location: location,
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
      setFacility(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFacility();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      <div className="bg-white shadow-lg-3  ">
        <div className="row g-0"></div>
        <div className="col-md-6 offset-md-2">
          <div className="bg-white shadow-lg-5 m-5 ">
            <form>
              <div className="mb-1">
                <label for="Name" className="form-label">
                  Facility_Name
                </label>
                <input
                  type="text"
                  value={Facility_Name}
                  required
                  className="form-control rounded-3"
                  id="facility_Name"
                  placeholder="Enter your username"
                  onChange={(e) => {
                    setFacility_Name(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  required
                  class="form-control rounded-3"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for=" Contact_No" className="form-label">
                  Contact_No
                </label>
                <input
                  type="text"
                  value={contactNo}
                  required
                  className="form-control rounded-3"
                  id=" Contact_No"
                  placeholder="Enter your location"
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <label for="Location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  required
                  className="form-control rounded-3"
                  id="location"
                  placeholder="Enter your location"
                  onChange={(e) => {
                    setLocation(e.target.value);
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

                <div className="control">
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
                  <div className="col-md-5 mt-2 w-5 ">
                    <button
                      onClick={BOOK}
                      className="btn btn-primary booked-btn "
                      style={{ fontSize: "15px" }}
                      id="book-button"
                    >
                      BOOK
                    </button>
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