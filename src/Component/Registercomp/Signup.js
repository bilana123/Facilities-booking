import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [department, setDepartment] = useState("");
  const [Confirm_password, setConfirm_password] = useState("");
  const { Signup, isPending, error } = useSignup();
  const navigate = useNavigate();
  const USER_TYPES = {
    ADMIN_USER: "Admin User",
    SUB_ADMIN: "Sub_Admin",
  };
  const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Confirm_password === password) {
      try {
        Signup(email, password, username, department).then(() => {
          navigate("/Login");
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("password should match");
    }
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit} className="Login-form">
        <h5 className="form-heading">Admin_Register</h5>
        <label className="form-label">
          <span className="form-span">Username:</span>
          <input
            type="username"
            required
            onChange={(e) => setusername(e.target.value)}
            value={username}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span
            className={`form-span ${email && "form-span--bold"}`}
            // add form-span--bold class if email is not empty
          >
            Email:
          </span>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span
            className={`form-span ${department && "form-span--bold"}`}
            // add form-span--bold class if department is not empty
          >
            Department:
          </span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select department</option>
            <option value="IT">IT</option>
            <option value="sports">sports</option>
            <option value="HR ">HR</option>
          </select>
        </label>
        <label className="form-label">
          <span
            className={`form-span ${password && "form-span--bold"}`}
            // add form-span--bold class if password is not empty
          >
            Password:
          </span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span
            className={`form-span ${Confirm_password && "form-span--bold"}`}
            // add form-span--bold class if Confirm_password is not empty
          >
            Confirm_password :
          </span>
          <input
            type="Password"
            onChange={(e) => setConfirm_password(e.target.value)}
            value={Confirm_password}
            placeholder="Confirm password"
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="form-btn" disabled={isPending}>
          {isPending ? "Signing up..." : "Sign up"}
        </button>
        {error && <p className="error">{error}</p>}
        <p className="login">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
