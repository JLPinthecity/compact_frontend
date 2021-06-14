import React from "react";
import { connect } from "react-redux";
//import action creator that returns an action to call with dispatch, which causes our reducer to run
//we pass state and action to reducer, which returns a new state and causes a rerender
import { logout } from '../actions/currentUser.js'
import { Switch, Route, Link } from "react-router-dom";

const Logout = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logout()
    }

    return (
        <span className="nav-btn" onClick={handleSubmit}>
            LOGOUT
        </span>
        
    )
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);

//OOO guide:
//action (creator) + fetch
//case statement in currentUser reducer
