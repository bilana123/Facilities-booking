import React, { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../Database/Firebase-config";
function ForgotPassword() {
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
    <div>
      <div class="container" id="forgotpasswordcontainer">
        <form onSubmit={Resetpassword}>
          <div class="row">
            <span>
              <button type="submit" class="btn">
                Reset
              </button>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <input
                type="email"
                required
                ref={emailRef}
                size="50"
                class="border border-dark"
                placeholder="Enter Your Email"
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
