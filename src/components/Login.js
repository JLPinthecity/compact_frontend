import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js"

 const Login = ({ loginForm, updateLoginForm, login, history }) => {
     
// console.log(history)
    const handleChange = (event) => {
        const newFormData = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
        updateLoginForm(newFormData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(loginForm, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="email" alt="email" onChange={handleChange}>
            </input><br/>
            <input type="text" name="password" placeholder="password" alt="password" onChange={handleChange}>
            </input><br/>
            <input type="Submit" className="btn" value="Login" readOnly />
        </form>
    )
};

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);


//our login state lives in the store, so we'll need to connect to redux
//props get passed to a functional component as an argument
