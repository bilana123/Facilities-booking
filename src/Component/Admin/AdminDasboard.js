import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { FaCogs, FaBook, FaUsers, FaSitemap } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";

import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContex";

function AdminDasboard() {
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
    const roleDocRef = doc(db, "roles", currentUser.uid);
    const roleDocSnap = await getDoc(roleDocRef);
    const roleData = roleDocSnap.data();
    console.log(roleData.role);
    setRole(roleData.role);
  };

  useEffect(() => {
    getFacilityData();

    handleRole();
  }, []);

  return (
    <div className="Sidebar ">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>
            <b>Dashboard</b>
          </p>
        </div>
        <nav className="links">
          <ul>
            <NavLink to="/admin/managefacility">
              <FaCogs style={{ marginRight: "10px" }} />
              <span>Manage Facility</span>
            </NavLink>
            <br></br>
            <NavLink to="/admin/booking">
              <FaBook style={{ marginRight: "10px" }} />
              <span>UserBooking_Detail</span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminDasboard;
