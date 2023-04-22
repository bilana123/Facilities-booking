import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, ispending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/admin");
  };
  return (
    <div className="Login-container">
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

        {!ispending && (
          <Link to="/admin" className="btn btn-info justify-centre">
            Login
          </Link>
        )}
        {ispending && (
          <button className="btn" disabled>
            loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
