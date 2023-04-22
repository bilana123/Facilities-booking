import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Booking_Detail() {
  const [Users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");
  const [department, setDepartment] = useState("");
  const [start_time, setStart_Time] = useState("");
  const [end_time, setEnd_Time] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "Users"));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const handleBooking = () => {
    // Define the BOOKED function here to handle the form submission
    console.log(
      username,
      email,
      location,
      department,
      start_time,
      end_time,
      date
    );
    // Do something with the form data, e.g. submit to a server
  };

  return (
    <div>
      {Users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
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
                <label htmlFor="email">location</label>
                <input
                  type="text"
                  className="form rounded-3"
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
                  <div className="col-md-2 mt-5">
                    <button
                      onClick={handleBooking}
                      className="btn btn-primary booked-btn"
                      style={{ fontSize: "10px" }}
                    >
                      Booking_Detail
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

export default Booking_Detail;
