import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js";
import { Link } from "react-router-dom";
import "./Form.css";

const Signup = ({ signupForm, updateSignupForm, signup, history }) => {
  // console.log(history)
  const handleChange = (event) => {
    const newSignupFormData = {
      ...signupForm,
      [event.target.name]: event.target.value,
    };
    // console.log("newSignFormData is", newSignupFormData)
    updateSignupForm(newSignupFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupForm, history);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-main">
        <p className="form-title">Sign up</p>

        <div className="input-container">
          <p className="input-title">Name</p>
          <input
            type="text"
            name="name"
            placeholder="name"
            alt="name"
            value={signupForm.name}
            className="form-input"
            onChange={handleChange}
          ></input>
          <p className="input-title">Email</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            alt="email"
            value={signupForm.email}
            className="form-input"
            onChange={handleChange}
          ></input>

          <p className="input-title">Password</p>

          <input
            type="text"
            name="password"
            placeholder="password"
            alt="password"
            value={signupForm.password}
            className="form-input"
            onChange={handleChange}
          ></input>
        </div>
        <input type="Submit" className="btn" value="Sign up" readOnly />
        <div className="signup_call">
          <p className="input-title">ALREADY HAVE AN ACCOUNT?</p>
          <Link to="/login" className="input-title create">
            Log in here
          </Link>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    signupForm: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
