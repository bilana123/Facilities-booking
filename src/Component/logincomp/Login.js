import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, error, ispending, isLoggedIn } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/admin");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const renderLoginForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit} className="Login-form mt-5 rounded-2">
          <h5>Admin</h5>
          <label>
            <span>email:</span>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              style={{ border: "2px solid black" }}
            />
          </label>

          <label>
            <span> password:</span>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ border: "2px solid black" }}
            />
          </label>
          <br></br>

          {!isLoggedIn && !ispending && (
            <button className="btn btn-info justify-centre" type="submit">
              Login
            </button>
          )}
          {ispending && (
            <button className="btn" disabled>
              loading
            </button>
          )}
          {error && <p>{error}</p>}
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
      </>
    );
  };

  const renderLogoutButton = () => {
    return (
      <button onClick={handleLogout} className="btn btn-info justify-centre">
        Logout
      </button>
    );
  };

  return (
    <div className="Login-container">
      {isLoggedIn ? renderLogoutButton() : renderLoginForm()}
    </div>
  );
}
