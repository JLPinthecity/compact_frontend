import React, { Component } from 'react'

const Login = () => {
    return (
        <form>
            <input type="text" name="email" value="" alt="email input" onChange={this.handleClick}>
            </input>
            <input type="text" name="password" value="" alt="password input" onChange={this.handleClick}>
            </input>
            <input type="Submit" value="Login"></input>
        </form>
    )

};

export default Login;