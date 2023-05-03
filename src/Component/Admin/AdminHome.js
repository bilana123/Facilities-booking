import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { FaHome, FaPlus, FaEdit, FaTrash, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";

import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContex";

function AdminHome() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [facility, setFacility] = useState([]);

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
  };

  useEffect(() => {
    get_facility_data();
  }, []);

  console.log(facility);
  return (
    <div className="Sidebar ">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>Admin Home</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <FaHome style={{ marginRight: "10px" }} />
                <span>User Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/create">
                <FaPlus style={{ marginRight: "10px" }} />
                <span>Add Facility</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/delete">
                <FaTrash style={{ marginRight: "10px" }} />
                <span>Manage Facility</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/booking">
                <FaBook style={{ marginRight: "10px" }} />
                <span>Booking_Detail</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/add_subadmin">
                <FaBook style={{ marginRight: "10px" }} />
                <span>Add Subadmin</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="third">
        {facility
          .filter((item) => item.department === currentUser.displayName)
          .map((item, index) => {
            return (
              <div className="card-container" key={index}>
                <div className="card-hall">
                  <img className="card-img-top" src={item.Image} alt="poster" />
                  <div className="card-body">
                    <h5 className="card-title">{item.facility_name}</h5>
                    <p className="card-text">{item.department} </p>
                    <a href="#" className="btn btn-info">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AdminHome;
