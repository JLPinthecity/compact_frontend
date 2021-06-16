import React, { Component } from 'react';
import { connect } from 'react-redux';

const Signup = () => {

    return (
        <form>
            <label>Sign up for an account:</label>
            <input type="text" name="email" placeholder="email"  alt="email" >
            </input>
            <input type="text" name="password" placeholder="password" alt="password" >
            </input>
            <input type="Submit" value="Login"></input>
        </form>
    )


}

export default connect()(Signup);