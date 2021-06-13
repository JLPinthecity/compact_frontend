import React, { Component } from 'react';
import { connect } from "react-redux";

const Login = () => {
    return (
        <form>
            <input type="text" name="email" placeholder="email" value="" alt="email input">
            </input>
            <input type="text" name="password" placeholder="password" value="" alt="password input">
            </input>
            <input type="Submit" value="Login"></input>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        email: state.loginForm.username,
        password: state.loginForm.password
    };
};

export default connect(mapStateToProps)(Login);


//our login state lives in the store, so we'll need to connect to redux
