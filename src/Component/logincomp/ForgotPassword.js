import React, { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../Database/Firebase-config";
import "./password.css";

function ForgotPassword() {
  const emailRef = useRef("");
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(Auth, emailRef.current.value);
      console.log("Email sent");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="padding">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Forgot Password</h5>
                <form onSubmit={resetPassword}>
                  <div className="form-group">
                    <input
                      type="email"
                      required
                      ref={emailRef}
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <br></br>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
