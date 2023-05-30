import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { FaCogs, FaBook, FaUsers, FaSitemap } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";

import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContex";
import ManageFacility from "./ManageFacility";
import { colors } from "@mui/material";

function AdminHome() {
  const { currentUser } = useContext(AuthContext);
  const [facility, setFacility] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

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
    console.log(roleData?.role);
    setRole(roleData?.role || "");
  };

  useEffect(() => {
    const fetchData = async () => {
      await getFacilityData();
      await handleRole();
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>
            <b>Dashboard</b>
          </p>
        </div>
        <nav className="links">
          <ul>
            {role === "" ? null : (
              <NavLink to="/admin/managefacility">
                <FaCogs style={{ marginRight: "10px" }} />
                <span className="text-white">Manage Facility</span>
              </NavLink>
            )}

            <br />
            <NavLink to="/admin/booking">
              <FaBook style={{ marginRight: "10px" }} />
              <span className="text-white">User_Booking_Detail</span>
            </NavLink>
            <br />
            {role === "" ? (
              <>
                <NavLink to="/manageDepartment">
                  <FaSitemap style={{ marginRight: "10px" }} />
                  <span className="text-white">Manage Programme</span>
                </NavLink>
                <br />
                <NavLink to="/manage">
                  <FaUsers style={{ marginRight: "1px" }} />
                  <span className="text-white">Manage_sub_Admin</span>
                </NavLink>
                <br />
              </>
            ) : null}
          </ul>
        </nav>
      </div>

      <div className="subadmin mt-5">
        {role === "subadmin" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              color: "black",
            }}
          >
            <ManageFacility />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminHome;
