import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { format } from "date-fns";

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
  const [users, setusers] = useState([]);
  const [createdDate, setCreatedDate] = useState("");

  const [contactError, setContactError] = useState("");
  let adminmail = "";

  const [Users, setUsers] = useState([]);

  // Function to send a push notification to the user
  const handleStartTimeChange = (e) => {
    const selectedTime = e.target.value; // Get the selected time value
    const hour = parseInt(selectedTime.split(":")[0]); // Extract the hour part

    const formattedTime = format(
      new Date(`2000-01-01T${selectedTime}`),
      "hh:mm a"
    ); // Format the time with am/pm
    const timeWithMeridiem = `${formattedTime}`; // Combine the time and meridiem

    setStartTime(timeWithMeridiem); // Update the state variable with the formatted time
  };

  const handleEndTimeChange = (e) => {
    const selectedTime = e.target.value; // Get the selected time value
    const hour = parseInt(selectedTime.split(":")[0]); // Extract the hour part

    const formattedTime = format(
      new Date(`2000-01-01T${selectedTime}`),
      "hh:mm a"
    ); // Format the time with am/pm
    const timeWithMeridiem = `${formattedTime}`; // Combine the time and meridiem

    setEndTime(timeWithMeridiem); // Update the state variable with the formatted time
  };

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
          createdDate: createdDate, // Save the created date and time
          status: "pending",
        });
        console.log("Document written with ID: ", docRef.id);
        const button = document.getElementById("book-button");
        if (button) {
          button.innerHTML = "Pending";
        }
        alert("Your request is pending. We will confirm through Email");

        if (facility.Category === "Hall") {
          // Find the user with the corresponding category
          const adminUser = users.find((user) => user.category === "Hall");
          if (adminUser) {
            console.log(adminUser);
            adminmail = adminUser.email; // Assign the admin email
          }
        } else if (facility.Category === "Classroom") {
          // Find the user with the corresponding category
          const adminUser = users.find((user) => user.category === "Classroom");
          if (adminUser) {
            adminmail = adminUser.email; // Assign the admin email
          }
        } else {
          // Find the user with the corresponding category
          const adminUser = users.find((user) => user.category === "Sports");
          if (adminUser) {
            adminmail = adminUser.email; // Assign the admin email
          }
        }

        const emailParams = {
          to_email: adminmail, // Use the adminmail variable here
          from_name: "Dechen",
          from_email: "05210220.jnec@rub.edu.bt",
          subject: "Facility Booked",
          message: `${name} has booked the ${facility.facility_name} facility.`,
        };

        emailjs
          .send(
            "service_11c12c7",
            "template_zw1l2lf",
            emailParams,
            "KMZOReDKneLwcfgTZ"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const userCol = collection(db, "Users");
      const usersSnapshot = await getDocs(userCol);
      const usersList = [];
      usersSnapshot.forEach((doc) => {
        usersList.push(doc.data());
      });
      setusers(usersList);
    }
    const fetchDepartments = async () => {
      const departmentsCollection = collection(db, "departments");
      const departmentsSnapshot = await getDocs(departmentsCollection);
      const departmentsList = departmentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDepartments(departmentsList);
    };
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      return datetime;
    };

    // Set the created date and time when the component mounts
    const datetime = getCurrentDateTime();
    setCreatedDate(datetime);
    fetchDepartments();

    fetchData();
  }, []);

  return (
    <div className="container">
      <h3>{facility.facility_name}</h3>
      <form onSubmit={BOOK}>
        <div className="mb-3">
          <label className="form-label">Your Name:</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address:</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact No:</label>
          <input
            type="tel"
            className="form-control"
            required
            onChange={(e) => setContactNo(e.target.value)}
          />
          {contactError && <div className="text-danger">{contactError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Programme:</label>
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
        <div className="row">
          <div className="col">
            <label className="form-label">Start Time:</label>
            <input
              type="time"
              className="form-control"
              required
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="col">
            <label className="form-label">End Time:</label>
            <input
              type="time"
              className="form-control"
              required
              onChange={handleEndTimeChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label className="form-label">Start Date:</label>
            <input
              type="date"
              className="form-control"
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">End Date:</label>
            <input
              type="date"
              className="form-control"
              required
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3" id="book-button">
          Book
        </button>
      </form>
    </div>
  );
}

export default Facilities;
