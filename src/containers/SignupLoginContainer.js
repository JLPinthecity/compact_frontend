import React from 'react'
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

//withRouter supplies router props that enables refresh
//did anything just change? 