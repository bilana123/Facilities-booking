import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import "./Add.css";
import { useNavigate } from "react-router-dom";

function AddDepartment() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "departments"), {
        name: name,
      });
      navigate("/manageDepartment");
      console.log("Document written with ID: ", docRef.id);

      // Clear the form fields after submitting
      setName("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="padding">
        <div className="bg-white shadow-lg-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Department Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control form-control-sm"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Add Department
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddDepartment;
