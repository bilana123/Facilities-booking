import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";
import { Link } from "react-router-dom";
import "./Register.css";
import emailjs from "emailjs-com";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    Name: "",
    category: "",
    confirm_password: "",
  });

  const { email, password, name, category, confirm_password } = formData;

  const { Signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirm_password !== password) {
      alert("Passwords do not match");
      return;
    }

    try {
      await Signup(email, password, name, category);
      //const templateParams = {
      // to_email: email,
      //from_email: "05210220.jnec@rub.edu.bt",
      // subject: "Your booking request has been rejected",
      //message: `Hi ${name}, You have been added as SubAdmin for the category: ${category}, Your new password is: ${password}`,
      //};
      //emailjs
      // .send(
      // "service_11c12c7",
      // "template_zw1l2lf",
      // templateParams,
      // "KMZOReDKneLwcfgTZ"
      // )
      // .then((response) => {
      //   console.log("Email sent successfully!", response.text);
      // })
      // .catch((error) => {
      //   console.error("Error sending email:", error);
      //  });
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="d-flex justify-content-center align-items-center m-5 ">
      <div className="bg-white shadow-lg p-5">
        <div className="col-lg-12 col-md-5">
          <form onSubmit={handleSubmit} class="from-login">
            <h5 className="text-center mb-4">Add Sub Admin</h5>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">category</label>
              <select
                name="category"
                value={category}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="Select subadmin">Select subadmin</option>
                <option value="Classroom">Classroom</option>
                <option value="Sports">Sports</option>
                <option value="Hall">Hall</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={confirm_password}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
            <br></br>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isPending}
            >
              {isPending ? "Signing up..." : "Add"}
            </button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
