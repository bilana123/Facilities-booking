import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email);
  };
  return (
    <div className="auth-form-container" style={{ borderRadius: "30px" }}>
      <h4>Login</h4>
      <div className="field1">
        <form onSubmit={handleSubmit}>
          <label for="Email....">Email</label>
          <input
            style={{ outline: "1px solid black" }}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="Email"
            placeholder="youemail@gmail.com"
            id="email"
            name="Email"
            Fill
            nn
            up
            the
            required
          />
          <br></br>
          <label for="password">password</label>
          <input
            style={{ outline: "1px solid black" }}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="******"
            id="password"
            name="password"
            Fill
            up
            the
            required
          />
          <br></br>
          <br></br>
          <button
            style={{ outline: "1px solid black", borderRadius: "10px" }}
            type="Submit"
          >
            Login
          </button>
        </form>
      </div>
      <br></br>
      <Link to="/register">Don't have an account?Register here.</Link>
    </div>
  );
};
