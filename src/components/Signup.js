import React, { Component } from 'react';
import { connect } from 'react-redux';

const Signup = () => {

    return (
        <form>
            <label>Sign up for an account:</label>
            <input type="text" name="email" placeholder="email" value={loginForm.email} alt="email" onChange={handleChange}>
            </input>
            <input type="text" name="password" placeholder="password" value={loginForm.password} alt="password" onChange={handleChange}>
            </input>
            <input type="Submit" value="Login"></input>
        </form>
    )


}

export default Signup;