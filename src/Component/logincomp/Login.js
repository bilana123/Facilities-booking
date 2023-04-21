import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubadmin, setIsSubadmin] = useState(false);
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
    <div className="Login-container">
      <form onSubmit={handleSubmit} className="Login-form mt-5 rounded-2">
        <h5>Admin</h5>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
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
        <br />

        {!isPending && (
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
  );
}
