import React from "react";

export default function Delete() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div
          className="row border border-dark rounded-4"
          id="row_for_delete_card"
        >
          <div className="col p-3">
            <p>Alpha Hall</p>
            <img
              src="https://www.jnec.edu.bt/wp-content/uploads/2021/07/IMG_6949-1.jpg"
              alt="image"
            />
          </div>
          <div className="col-md-5 mt-5">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div
          className="row border border-dark rounded-4"
          id="row_for_delete_card"
        >
          <div className="col p-3">
            <p>Beta Hall</p>
            <img
              src="https://www.jnec.edu.bt/wp-content/uploads/2021/07/IMG_6949-1.jpg"
              alt="image"
            />
          </div>
          <div className="col-md-5 mt-5">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div
          className="row border border-dark rounded-4"
          id="row_for_delete_card"
        >
          <div className="col p-3">
            <p>MP Hall</p>
            <img
              src="https://www.jnec.edu.bt/wp-content/uploads/2021/07/IMG_6949-1.jpg"
              alt="image"
            />
          </div>
          <div className="col-md-5 mt-5">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
