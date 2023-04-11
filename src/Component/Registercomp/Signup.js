import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState, useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const { error, signup, currentUser } = useAuth();
  const [err, setErr] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    FullName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  useEffect(() => {
    if (error) {
      setBackError(error);
      setTimeout(() => {
        setBackError("");
      }, 5000);
    }
  }, [error, currentUser]);

  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, ConfirmPassword, FullName } = user;

    if (
      password === "" ||
      ConfirmPassword === "" ||
      email === "" ||
      FullName === ""
    ) {
      setErr("Please fill in all the required fields.");
      return;
    }

    if (password !== ConfirmPassword) {
      setErr("Password and Confirm Password do not match.");
      return;
    }

    if (password.length < 6 || ConfirmPassword.length < 6) {
      setErr("Password should be at least 6 characters long.");
      return;
    }

    try {
      await signup(email, password, FullName);
      if (currentUser) {
        setUser({
          FullName: "",
          email: "",
          password: "",
          ConfirmPassword: "",
        });
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="box">
      {err || backError ? <p className="error">{err || backError}</p> : null}
      <form onSubmit={SubmitHandler} className="form">
        <h2>Register form</h2>
        <div className="input field">
          <input
            type="text"
            placeholder="Username"
            value={user.FullName}
            name="FullName"
            onChange={UserHandler}
          />
        </div>
        <div className="input field">
          <input
            type="text"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={UserHandler}
          />
        </div>
        <div className="input field">
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={UserHandler}
          />
        </div>
        <div className="input field">
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.ConfirmPassword}
            name="ConfirmPassword"
            onChange={UserHandler}
          />
        </div>
        <div className="inputfield">
          <input type="submit" />
        </div>
        <p className="forgot">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
