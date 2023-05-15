import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { setDoc, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Editsubadmin() {
  const [email, setEmail] = useState("");
  const emailRef = useRef("");
  const [name, setname] = useState(null);
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const locate = useLocation();
  const users = locate.state;
  console.log(users);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = doc(db, "users", users.id);
    await updateDoc(collectionRef, {
      email: emailRef.current.value,
      Name: name,
      category: category,
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleChange = (e) => {
    // Your input change logic goes here
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-5 ">
      <div className="bg-white shadow-lg p-5">
        <div className="col-lg-12 col-md-5">
          <form onSubmit={handleSubmit} class="from-login">
            <h2 className="text-center mb-4">Add Sub Admin</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                defaultValue={users.email}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">name</label>
              <input
                type="text"
                name="username"
                defaultValue={users.Name}
                value={name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                value={category}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value={users.category}>{users.category}</option>
                <option value="Classroom">Classroom</option>
                <option value="Sports">Sports</option>
                <option value="Hall">Hall</option>
              </select>
            </div>

            <br></br>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isPending}
            >
              {isPending ? "Signing up..." : "Edit"}
            </button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editsubadmin;
