import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Editsubadmin() {
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const categoryRef = useRef("");
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const locate = useLocation();
  const users = locate.state;
  console.log(users);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = doc(db, "users", users.id);
      await updateDoc(collectionRef, {
        email: emailRef.current.value,
        Name: usernameRef.current.value,
        category: categoryRef.current.value,
      });
      alert("Record updated successfully!");
      navigate(-1);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div className="bg-white shadow-lg p-5">
        <div className="col-lg-12 col-md-5">
          <form onSubmit={handleSubmit} className="from-login">
            <h2 className="text-center mb-4">Edit Sub Admin</h2>
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
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                defaultValue={users.Name}
                ref={usernameRef}
                required
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                ref={categoryRef}
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
              {isPending ? "Updating..." : "Edit"}
            </button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editsubadmin;
