import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import copy from "../Image/copy.jpg";
import { useEffect } from "react";
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
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const UsersSnapshot = await getDocs(collection(db, "Users"));
      const UsersList = UsersSnapshot.docs.map((doc) => doc.data());
      setUsers(UsersList);
    };

    getUsers();
  }, []);

  console.log(Users);

  const BOOK = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        Username: Username,
        Location: Location,
        Department: Department,
        Start_Time: Start_Time,
        Email: Email,
        End_Time: End_Time,
        date: date,
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
    // add code to update the database with the booking details
  };

  useEffect(() => {
    const getFacility = async () => {
      const data = await getDocs(collection(db, "Users"));
      setFacility(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  
      // Check if current user has already booked the facility
      const currentUser = Users.find((user) => user.Email === Email);
      if (currentUser) {
        const button = document.getElementById("book-button");
        if (button) {
          button.disabled = true;
          button.innerHTML = "BOOKED";
        }
      }
    };
    getFacility();
  }, [Users, Email]);

  return (
    <div>
      {Facility.map((facility) => {
        return <div key={facility.id}>{facility.name}</div>;
      })}
      <div className="container border">
        <div className="card  m-1 p-2">
          <div className="row g-2"></div>
          <div className="col-md-6 offset-md-2">
            <div className="Facility-body">
              <h5 className="Facility-title">MPH </h5>
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
                  className="form rounded-3"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Location</label>
                <input
                  type="text"
                  className="form rounded-3"
                  id="Location"
                  placeholder="Enter your email"
                  onChange={(e) => setLocation(e.target.value)}
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
                  className="form rounded-3"
                  id="end-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setStart_Time(e.target.value);
                  }}
                />

                <label htmlFor="end-time">End-Time</label>
                <input
                  type="time"
                  className="form rounded-3"
                  id="End-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setEnd_Time(e.target.value);
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
  disabled={isBooked} // disable the button if isBooked is true
>
  {isBooked ? "BOOKED" : "BOOK"} {/* change the button label to "BOOKED" if isBooked is true */}
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