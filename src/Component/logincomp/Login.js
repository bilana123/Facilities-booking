import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password).then(() => {
        navigate("/admin");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-white shadow-lg p-5">
        <form onSubmit={handleSubmit} className="from-login">
          <h5 className="Form"></h5>

          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <br></br>

          {!isPending && (
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Loading
            </button>
          )}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
