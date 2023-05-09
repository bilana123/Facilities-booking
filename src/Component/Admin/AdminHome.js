import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { FaHome, FaPlus, FaEdit, FaTrash, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";

import {
  getDocs,
  collection,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContex";

function AdminHome() {
  const { currentUser } = useContext(AuthContext);
  const [facility, setFacility] = useState([]);
  const [role, setRole] = useState("");

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
  };

  const handelrole = async () => {
    const roleDocRef = doc(db, "roles", currentUser.uid);
    const roleDocSnap = await getDoc(roleDocRef);
    const roleData = roleDocSnap.data();
    setRole(roleData.role);
  };

  useEffect(() => {
    get_facility_data();
    handelrole();
  }, []);
  console.log(role);
  return (
    <div className="Sidebar ">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>Admin Home</p>
        </div>
        <nav className="links">
          <ul>
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
            {role !== "subadmin" ? (
              <li>
                <NavLink to="/manage">
                  <FaBook style={{ marginRight: "10px" }} />
                  <span>Managesub_Admin</span>
                </NavLink>
              </li>
            ) : null}
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
