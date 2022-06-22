import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  debugger;

  return (
    <nav className="nav-container">
      <div className="menu-items">
        <Link to="/" className="menu-item">
          Home
        </Link>

        <Link to="/about" className="menu-item">
          About
        </Link>

        <Link to="/sample" className="menu-item">
          Sample Gear List
        </Link>

        <Link to="/items" className="menu-item">
          Create Gear List
        </Link>

        <Link to="/login" className="menu-item">
          Login
        </Link>
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
