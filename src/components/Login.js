import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";
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
        <input
          type="text"
          name="email"
          placeholder="email"
          alt="email"
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          alt="password"
          onChange={handleChange}
        ></input>
        <br />
        <input type="Submit" className="btn" value="Login" readOnly />
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
