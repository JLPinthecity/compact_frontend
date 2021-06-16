import React from 'react'
import Signup from '../components/Signup.js'
import Login from '../components/Login.js'
import { withRouter, Link } from 'react-router-dom'

const SignupLoginContainer = () => {
    return (
        <div>
            <Link to="/signup" className="nav-btn">SIGNUP | </Link>
            <Link to="/login" className="nav-btn">LOGIN</Link>
        </div>
    )
}

export default withRouter(SignupLoginContainer)