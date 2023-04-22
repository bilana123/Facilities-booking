import React from "react";
import { FaHome, FaPlus, FaEdit, FaTrash, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="Sidebar">
      <div className="Sidebar-content">
        <div className="Admin">
          <p>Admin Home</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <FaHome style={{ marginRight: "10px" }} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <FaPlus style={{ marginRight: "10px" }} />
                <Link to="/admin/create">Add Facility</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit">
                <FaEdit style={{ marginRight: "10px" }} />
                <span>Edit Facility</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete">
                <FaTrash style={{ marginRight: "10px" }} />
                <Link to="/admin/delete">Delete Facility</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking-Detail">
                <FaBook style={{ marginRight: "10px" }} />
                <Link to="/admin/delete">Booking_Detail</Link>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminHome;
