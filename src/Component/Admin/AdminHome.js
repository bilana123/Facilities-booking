import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="row justify-content-center mt-5">
            <div className="col-lg">
              <div className="card admin-card">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <Link to="./Create" className="btn btn-primary ">
                    Create Facility
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card admin-card">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <Link to="/edit-facility" className="btn btn-primary">
                    Edit Facility
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="card admin-card">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <Link to="/delete-facility" className="btn btn-primary">
                    Delete Facility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;
