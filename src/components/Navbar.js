import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return <nav className="NavbarItems"></nav>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Navbar);
