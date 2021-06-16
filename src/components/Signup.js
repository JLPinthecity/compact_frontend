import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js"

 const Signup = ({ signupForm, updateSignupForm, signup }) => {

    const handleChange = (event) => {
        const newSignupFormData = {
            ...signupForm,
            [event.target.name]: event.target.value
        }
        updateSignupForm(newSignupFormData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(signupForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" alt="name" value={signupForm.name} onChange={handleChange}>
            </input>
            <input type="text" name="email" placeholder="email" alt="email" value={signupForm.email} onChange={handleChange}>
            </input>
            <input type="text" name="password" placeholder="password" alt="password" value={signupForm.password} onChange={handleChange}>
            </input>
            <input type="Submit" value="Sign up" readOnly/>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);


