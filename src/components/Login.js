import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";
import { Link } from "react-router-dom";
import "./Form.css";

const Login = ({ loginForm, updateLoginForm, login, history }) => {
  const handleChange = (event) => {
    const newFormData = {
      ...loginForm,
      [event.target.name]: event.target.value,
    };
    updateLoginForm(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginForm, history);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-main">
        <p className="form-title">Login</p>
        <br></br>
        <div className="input-container">
          <p className="input-title">Email</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            alt="email"
            className="form-input"
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="input-container">
          <p className="input-title">Password</p>
          <input
            type="text"
            name="password"
            placeholder="password"
            alt="password"
            className="form-input"
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <input type="Submit" className="btn" value="Sign in" readOnly />
        <div className="signup_call">
          <p className="input-title">DON'T HAVE AN ACCOUNT?</p>
          <Link to="/signup" className="input-title create">
            Create one
          </Link>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
