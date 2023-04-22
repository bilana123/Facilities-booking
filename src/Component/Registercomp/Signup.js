import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";
import { Link } from "react-router-dom";

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
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="Login-form mt-5 rounded-2"
        style={{
          height: "500px",
          width: "400px",
          fontSize: "18px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2>Register</h2>
        <label>
          <span>username:</span>
          <input
            type="username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span style={{ fontWeight: email ? "bold" : "normal" }}>email:</span>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            style={{ fontWeight: email ? "normal" : "normal", color: "black" }} // added to make email text black
          />
        </label>
        <label>
          <span style={{ fontWeight: department ? "bold" : "normal" }}>
            department:
          </span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select department</option>
            <option value="IT">IT</option>
            <option value="sports">sports</option>
          </select>
        </label>
        <label>
          <span style={{ fontWeight: password ? "bold" : "normal" }}>
            password:
          </span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            style={{
              fontWeight: password ? "normal" : "normal",
              color: "black",
            }} // added to make email text blackbhgh
          />
        </label>
        <label>
          <span
            style={{
              fontWeight: Confirm_password ? "bold" : "normal",
              color: "black",
            }}
          >
            Confirm_password :
          </span>
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "green",
              fontSize: "12px",
              padding: "5px 10px",
              margin: "0 auto", // center horizontally
              width: "100px",
            }}
          >
            Sign up
          </button>
          <input
            type="password"
            onChange={(e) => setConfirm_password(e.target.value)}
            value={Confirm_password}
            placeholder="Confirm password"
            style={{
              fontWeight: Confirm_password ? "normal" : "normal",
              color: "black",
            }} // added to make email text black
          />
        </label>

        {error && <p>{error}</p>}
        <p>
          Already have an account? <Link to="/Login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
