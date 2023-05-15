import React, { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../Database/Firebase-config";

export default function ForgotPassword() {
  const emailRef = useRef("");
  const navigate = useNavigate();

  const Resetpassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(Auth, emailRef.current.value);
      console.log("email sent");
      navigate("/login");
    } catch (error) {
      // Handle the error
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container mt-5 " id="forgotpasswordcontainer">
        <form onSubmit={Resetpassword}>
          <div className="row bg-white shadow-sm p-4">
            <div className="col-md-6 ">
              <input
                type="email"
                required
                ref={emailRef}
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button type="submit" className="btn btn-primary mt-3">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
