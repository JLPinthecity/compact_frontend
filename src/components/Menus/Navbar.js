import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "../../actions/showSidebar";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "../Logout";
import "../Menus/Navbar.css";

const Navbar = (props) => {
  // props.showSidebar is false until burger icon is clicked then it's true

  const closeSidebar = () => {
    props.closeSidebar();
  };

  return (
    <nav className="nav-container">
      <div id={props.menuButtonClicked ? "hidden" : ""}>
        <div className="menu-row">
          <span className={props.menuButtonClicked ? "menu-title" : "hide"}>
            Menu
          </span>

          <span className={props.menuButtonClicked ? "menu-close" : "hide"}>
            <CloseIcon onClick={closeSidebar} />
          </span>
        </div>
        <div className={props.showSidebar ? "menu-column" : "menu"}>
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
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    showSidebar: state.showSidebar,
  };
};

export default connect(mapStateToProps, { closeSidebar })(Navbar);
