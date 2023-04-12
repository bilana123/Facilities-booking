
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
//import { authentication } from "../../Database/Firebase";
import "./Register.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  /* Your Firebase config */
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // validate form inputs
    let errors = {};
    let isValid = true;

    if (!this.state.username) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (!this.state.email) {
      isValid = false;
      errors["email"] = "Please enter your email.";
    }

    if (!this.state.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!this.state.confirmPassword) {
      isValid = false;
      errors["confirmPassword"] = "Please confirm your password.";
    }

    if (this.state.password !== this.state.confirmPassword) {
      isValid = false; 
      errors["confirmPassword"] = "Passwords do not match.";
    }

    this.setState({ errors: errors });

    if (isValid) {
      // submit form data
      console.log("Submitting form data:", this.state);
      const app = initializeApp(firebaseConfig);
      let userCredential; // Define userCredential variable
      signInWithEmailAndPassword(
       
        this.state.email,
        this.state.password
      )
        .then((result) => {
          userCredential = result; // Assign value to userCredential
          console.log(userCredential.user);
          const db = getFirestore(app);
          db.collection("UserData")
            .doc(userCredential.user.uid)
            .set({ Email: userCredential.user.email });
        })
        .catch((error) => {
          // Handle errors
          console.log(error);
          userCredential = { user: { uid: "" } };
          const db = getFirestore(app);
          db.collection("UserData")
            .doc(userCredential.user.uid) // Use userCredential here
            .set({ Error: error });
        });
    }
  }
  render() {
    return (
      <div className="form-group ">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="w-100 p-20">
            <span class="border-0"></span>
            <label htmlFor="username">Username:</label>
            <input
              style={{ outline: "1px solid black" }}
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div className="text-danger">{this.state.errors.username}</div>
          </div>
          <div className="w-100 p-20">
            <label htmlFor="email">Email:</label>
            <input
              style={{ outline: "1px solid black" }}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div className="100 p-20">
            <label htmlFor="password">Password:</label>
            <input
              style={{ outline: "1px solid black" }}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div className="w-100 p-20">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              style={{ outline: "1px solid black" }}
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <div className="text-danger">
              {this.state.errors.confirmPassword}
            </div>
            <br></br>
          </div>
          <br></br>
          <div className="w-100 p-20">
            <button type="Register">Register</button>
          </div>
        </form>

        <Link to="/Create">Already have an account?Login here.</Link>
      </div>
    );
  }
}

export default Register;
