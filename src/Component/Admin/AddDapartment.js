import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function AddDepartment() {
  const [name, setName] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "departments"), {
        name: name,
      });

      console.log("Document written with ID: ", docRef.id);

      // Clear the form fields after submitting
      setName("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Department Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Department</button>
    </form>
  );
}

export default AddDepartment;
