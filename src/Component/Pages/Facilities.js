import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, getting_token } from "../../Database/Firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import { getMessaging } from "firebase/messaging";
import axios from "axios";
import emailjs from "emailjs-com";

function Facilities() {
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [name, setName] = useState("");
  const [programme, setProgramme] = useState("");
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [departments, setDepartments] = useState([]);
  const locate = useLocation();
  const facility = locate.state;
  const [contactError, setContactError] = useState("");

  const [Users, setUsers] = useState([]);

  // Function to send a push notification to the user
  // Function to send a push notification to the user
  async function sendNotification(token) {
    const messaging = getMessaging();
    const notificationPayload = {
      notification: {
        title: "Booking Approval",
        body: "Your booking is pending approval.",
      },
      token: token,
    };

    try {
      // Send the notification payload to the user's device token
      const response = await messaging.send(notificationPayload);
      console.log("Notification sent successfully:", response);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  }

  const BOOK = async (e) => {
    e.preventDefault();
    console.log("Users:", Users);

    const conflict = Users.find((item) => {
      // Check if the booking time overlaps with an existing booking
      const existingStart = new Date(item.startDate + "T" + item.startTime);
      const existingEnd = new Date(item.endDate + "T" + item.endTime);
      const newStart = new Date(startDate + "T" + startTime);
      const newEnd = new Date(endDate + "T" + endTime);

      return (
        item.facility_Name === facility.facility_name &&
        newStart < existingEnd &&
        newEnd > existingStart
      );
    });

    if (conflict) {
      console.log("Conflict item:", conflict); // Log the item that conflicts with the booking
      alert(
        "It is already booked by other, you can book on another time or date"
      );
    } else {
      try {
        const docRef = await addDoc(collection(db, "Users"), {
          facility_Name: facility.facility_name,
          name: name,
          contactNo: contactNo,
          programme: programme,
          startTime: startTime,
          email: email,
          endTime: endTime,
          startDate: startDate,
          endDate: endDate,
          category: facility.Category,
          status: "pending",
        });
        console.log("Document written with ID: ", docRef.id);
        const button = document.getElementById("book-button");
        if (button) {
          button.innerHTML = "Pending";
        }
        alert("Your request is pending. We will confirm through Email");
        getting_token
          .then((currentToken) => {
            if (currentToken) {
              // Send the token to your server and update the UI if necessary
              // ...
              // Call the sendNotification function here
              sendNotification(currentToken);
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
        navigate("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const handleContactNoChange = (value) => {
    value = value.trim();

    if (value === "") {
      setContactError("Contact number is required");
    } else if (!/^\d+$/.test(value)) {
      setContactError("Contact number should only contain digits");
    } else {
      setContactError("");
    }

    setContactNo(value);
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      setUsers(usersList);
    };

    const fetchDepartments = async () => {
      const departmentsCollection = collection(db, "departments");
      const departmentsSnapshot = await getDocs(departmentsCollection);
      const departmentsList = departmentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDepartments(departmentsList);
    };

    fetchDepartments();
    getUsers();
  }, []);

  return (
    <div>
      <div className="bg-white shadow-lg-3">
        <div className="row g-0"></div>
        <div className="col-md-6 offset-md-2">
          <div className="bg-white shadow-lg-5 m-5">
            <form onSubmit={BOOK}>
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
                <label htmlFor="name" className="form-label">
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
                    handleContactNoChange(e.target.value);
                  }}
                />
                {contactError && (
                  <div className="text-danger">{contactError}</div>
                )}
              </div>

              <div className="mb-1">
                <label htmlFor="programme" className="form-label">
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
                  <option value="">Choose a Programme or other user---</option>
                  {departments.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-1">
                <label htmlFor="start-time" className="form-label">
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
                <label htmlFor="end-time" className="form-label">
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
                <label htmlFor="start-date" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  required
                  className="form-control rounded-3"
                  id="start-date"
                  placeholder="Enter date in YYYY-MM-DD format"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="end-date" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  required
                  className="form-control rounded-3"
                  id="end-date"
                  placeholder="Enter date in YYYY-MM-DD format"
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
