import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import "../Menus/Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="nav-container">
      <div className="menu">
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/about" className="item">
          About
        </Link>

        <Link to="/items" className="item">
          Create Gear List
        </Link>

        {props.currentUser ? (
          <Logout className="item" />
        ) : (
          <Link to="/login" className="item">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Navbar);
