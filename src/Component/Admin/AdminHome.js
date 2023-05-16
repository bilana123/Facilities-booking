import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { FaTrash, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";

import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContex";

function AdminHome() {
  const { currentUser } = useContext(AuthContext);
  const [facility, setFacility] = useState([]);
  const [role, setRole] = useState("");
  console.log(currentUser);

  const getFacilityData = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFacility(facilityList);
  };

  const handleRole = async () => {
    const roleDocRef = doc(db, "users", currentUser.uid);
    const roleDocSnap = await getDoc(roleDocRef);
    const roleData = roleDocSnap.data();
    console.log(roleData.category);
    setRole(roleData.category);
  };

  useEffect(() => {
    getFacilityData();

    handleRole();
  }, []);

  return (
    <div className="Sidebar ">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>Admin Home</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/admin/delete">
                <FaTrash style={{ marginRight: "10px" }} />
                <span>Manage Facility</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/booking">
                <FaBook style={{ marginRight: "10px" }} />
                <span>UserBooking_Detail</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/manageDepartment">
                <FaBook style={{ marginRight: "10px" }} />
                <span>Manage Department</span>
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
    </div>
  );
}

export default AdminHome;
