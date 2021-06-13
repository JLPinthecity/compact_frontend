import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js"

 const Login = ({ loginForm, updateLoginForm }) => {

    const handleChange = (event) => {
        const newFormData = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
        updateLoginForm(newFormData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="email" value={loginForm.email} alt="email" onChange={handleChange}>
            </input>
            <input type="text" name="password" placeholder="password" value={loginForm.password} alt="password" onChange={handleChange}>
            </input>
            <input type="Submit" value="Login"></input>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    };
};

export default connect(mapStateToProps, { updateLoginForm })(Login);


//our login state lives in the store, so we'll need to connect to redux
//props get passed to a functional component as an argument
