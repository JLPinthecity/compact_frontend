import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../Header/Footer.css";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>
            Take a hike. <i>Adventure awaits.</i>
          </h3>
        </div>
        <div className="footer-column">
          <Link to="/about" className="footer-menu-item">
            About
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/signup" className="footer-menu-item">
            Create an account
          </Link>
        </div>
        <div className="footer-column">
          {props.currentUser ? (
            <Link to="/items" className="footer-menu-item">
              see backpack
            </Link>
          ) : (
            <Link to="/sample" className="footer-menu-item">
              see backpack
            </Link>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2022, Compact </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Footer);
