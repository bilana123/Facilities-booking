import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";


export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [Confirm_password, setConfirm_password] = useState("");
  const { Signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Confirm_password === password) {
      Signup(email, password, username);
      navigate("/Login");
    } else {
      alert("password should match");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="Login-form mt-5">
      <h2>Register</h2>
      <label>
        <label>
          <span>username:</span>
          <input
            type="username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />
        </label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Confirm_password:</span>
        <input
          type="password"
          onChange={(e) => setConfirm_password(e.target.value)}
          value={Confirm_password}
        />
      </label>

      <br></br>

      <button type="submit" className="btn">
        Signup
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
