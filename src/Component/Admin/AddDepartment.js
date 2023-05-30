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
    alert("You have added successfully ");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="add-department-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Programme Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <br></br>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Add Programme
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddDepartment;
