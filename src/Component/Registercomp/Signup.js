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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Confirm_password === password) {
      try {
        Signup(email, password, username, department).then(() => {
          navigate("/admin");
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("password should match");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="Login-form">
        <h2 className="form-heading">Register</h2>
        <label className="form-label">
          <span className="form-span">username:</span>
          <input
            type="username"
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
            email:
          </span>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span
            className={`form-span ${department && "form-span--bold"}`}
            // add form-span--bold class if department is not empty
          >
            department:
          </span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
          >
            <option value="">Select department</option>
            <option value="IT">IT</option>
            <option value="sports">sports</option>
          </select>
        </label>
        <label className="form-label">
          <span
            className={`form-span ${password && "form-span--bold"}`}
            // add form-span--bold class if password is not empty
          >
            password:
          </span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
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
            type="password"
            onChange={(e) => setConfirm_password(e.target.value)}
            value={Confirm_password}
            placeholder="Confirm password"
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
