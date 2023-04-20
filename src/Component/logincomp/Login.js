import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, ispending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };
  return (
    <div className="Login-container">
      <form onSubmit={handleSubmit} className="Login-form mt-5 rounded-5">
        <h2>Login</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            style={{
              fontWeight: email ? "normal" : "normal",
              color: "black",
            }}
          />
        </label>

        <label>
          <span> password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{
              fontWeight: password ? "normal" : "normal",
              color: "black",
            }}
          />
        </label>
        <br></br>

        {!ispending && <button className="btn">Login</button>}
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
