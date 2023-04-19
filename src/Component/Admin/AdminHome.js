import React from "react";
import "./Admin.css";

function AdminHome() {
  return (
    <div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg">
          <div class="card admin-card">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <button type="button" class="btn btn-primary ">
                Create Facility
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg">
          <div class="card admin-card">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <button type="button" class="btn btn-primary">
                Edit Facility
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg">
          <div class="card admin-card">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <button type="button" class="btn btn-primary">
                Delete Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
