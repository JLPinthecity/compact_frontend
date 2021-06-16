 import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js' //basically sets state

const Signup = ({signup}) => {
//signup: {email: "", password: ""}

    const handleChange = (event) => {
      const userInputs = {
          ...signup,
          [event.target.name]: event.target.value
      }
      updateSignupForm(userInputs)
    }

    //we need to update state by dispatching an update 

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Sign up for an account:</label>
            <input type="text" name="email" placeholder="email"  alt="email" onChange={handleChange}>
            </input>
            <input type="text" name="password" placeholder="password" alt="password" onChange={handleChange}>
            </input>
            <input type="Submit" value="Sign Up"></input>
        </form>
    )


}

const mapStateToProps = (state) => {
    return {
        signup: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm })(Signup);

