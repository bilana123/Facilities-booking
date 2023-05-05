import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import copy from "../Image/copy.jpg";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import emailjs from "emailjs-com";

function Facilities() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact_No, setContact_No] = useState("");
  const [Location, setLocation] = useState("");
  const [Programme, setProgramme] = useState("");
  const [Start_Time, setStart_Time] = useState("");
  const [End_Time, setEnd_Time] = useState("");
  const [Start_date, setStart_date] = useState("");
  const [End_date, setEnd_date] = useState("");
  const [Facility, setFacility] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const UsersSnapshot = await getDocs(collection(db, "Users"));
      const UsersList = UsersSnapshot.docs.map((doc) => doc.data());
      setUsers(UsersList);
    };

    getUsers();
  }, []);

  const sendEmail = (user) => {
    const serviceId = "service_nemfbwq";
    const templateId = "template_ntrguog";
    const userId = "QtDooSGgQqtG3MMXT";

    console.log(user.Email);
    emailjs.send(serviceId, templateId, user, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const BOOK = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        Name: Name,
        Contact_No: Contact_No,
        Location: Location,
        Programme: Programme,
        Start_Time: Start_Time,
        Email: Email,
        End_Time: End_Time,
        Start_date: Start_date,
        End_date: End_date,
        status: "pending",
      });
      console.log("Document written with ID: ", docRef.id);
      const button = document.getElementById("book-button");
      if (button) {
        button.innerHTML = "BOOKED";
      }
      Users.forEach((user) => {
        sendEmail(user);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const getFacility = async () => {
      const data = await getDocs(collection(db, "Users"));
      setFacility(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFacility();
  }, []);

  return (
    <div>
      {Facility.map((facility) => {
        return <div key={facility.id}>{facility.name}</div>;
      })}
      <div className="bg-white shadow-lg-3  ">
        <div class="row g-0"></div>
        <div class="col-md-6 offset-md-2">
          <div class="bg-white shadow-lg-5 m-5 ">
            <form>
              <div class="mb-1">
                <label for="Name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={Name}
                  required
                  class="form-control rounded-3"
                  id="Name"
                  placeholder="Enter your username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={Email}
                  required
                  class="form-control rounded-3"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for=" Contact_No" class="form-label">
                  Contact_No
                </label>
                <input
                  type="text"
                  value={Contact_No}
                  required
                  class="form-control rounded-3"
                  id=" Contact_No"
                  placeholder="Enter your location"
                  onChange={(e) => {
                    setContact_No(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="Location" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  value={Location}
                  required
                  class="form-control rounded-3"
                  id="Location"
                  placeholder="Enter your location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="Programme" class="form-label">
                  Programme
                </label>
                <select
                  class="form-select rounded-3"
                  value={Programme}
                  required
                  aria-label="Default select example"
                  id="Programme"
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
              <div class="mb-1">
                <label for="start-time" class="form-label">
                  Start-Time
                </label>
                <input
                  type="time"
                  value={Start_Time}
                  required
                  class="form-control rounded-3"
                  id="start-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setStart_Time(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="end-time" class="form-label">
                  End-Time
                </label>
                <input
                  type="time"
                  value={End_Time}
                  required
                  class="form-control rounded-3"
                  id="end-time"
                  placeholder="Enter time in HH:MM AM/PM format"
                  onChange={(e) => {
                    setEnd_Time(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="Start_date" class="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  value={Start_date}
                  required
                  class="form-control rounded-3"
                  id="Start_date"
                  placeholder="Enter time in MM/dd/yyyy format"
                  onChange={(e) => {
                    setStart_date(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="End_date" class="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  value={End_date}
                  required
                  class="form-control rounded-3"
                  id="End_date"
                  placeholder="Enter time in MM/dd/yyyy format"
                  onChange={(e) => {
                    setEnd_date(e.target.value);
                  }}
                />
              </div>
              <div class="col-md-5 mt-2 w-5">
                <button
                  onClick={BOOK}
                  class="btn btn-primary booked-btn"
                  style={{ fontSize: "15px" }}
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
