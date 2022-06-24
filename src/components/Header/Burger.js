import React from "react";
import { connect } from "react-redux";
import { openSidebar } from "../../actions/showSidebar";
import "../Header/Burger.css";

const Burger = (props) => {
  const showSidebar = () => {
    props.openSidebar();
  };

  return (
    <button className="toggle-button" onClick={showSidebar}>
      <div className="toggle-button__line" id="line1" />
      <div className="  toggle-button__line" id="line2" />
      <div className="toggle-button__line" id="line3" />
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    showSidebar: state.showSidebar,
  };
};

export default connect(mapStateToProps, { openSidebar })(Burger);
