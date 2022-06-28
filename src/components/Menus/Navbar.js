import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "../../actions/showSidebar";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "../Forms/Logout";
import "../Menus/Navbar.css";

const Navbar = (props) => {
  // props.showSidebar is false until burger icon is clicked then it's true

  const closeSidebar = () => {
    props.closeSidebar();
  };

  return (
    <nav className="nav-container">
      <div className={props.showSidebar ? "modal-background" : ""}>
        <div className={props.showSidebar ? "sidebar-main" : ""}>
          <div className="first-row">
            <span className={props.showSidebar ? "menu-title" : "hide"}>
              Menu
            </span>

            <span className={props.showSidebar ? "menu-close" : "hide"}>
              <CloseIcon onClick={closeSidebar} />
            </span>
          </div>

          <div className={props.showSidebar ? "menu-column" : "menu"}>
            <Link to="/" className="item" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/about" className="item" onClick={closeSidebar}>
              About
            </Link>
            <Link to="/items" className="item" onClick={closeSidebar}>
              Gear List
            </Link>
            {props.currentUser ? (
              <Logout className="item" onClick={closeSidebar} />
            ) : (
              <Link to="/login" className="item" onClick={closeSidebar}>
                Login
              </Link>
            )}
          </div>
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
