import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";
import { withRouter } from "react-router";

const Logout = ({ logout, history }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    logout(history);
  };

  return (
    <span className="item" onClick={handleSubmit}>
      LOGOUT
    </span>
  );
};

export default withRouter(connect(null, { logout })(Logout));

//OOO guide:
//action (creator) + fetch
//case statement in currentUser reducer

//import action creator that returns an action to call with dispatch, which causes our reducer to run
//we pass state and action to reducer, which returns a new state and causes a rerender
