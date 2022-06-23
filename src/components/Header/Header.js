import React from "react";
import Burger from "../Header/Burger.js";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-main">
        <div className="burger-icon">
          <Burger />
        </div>
        <h1 className="siteTitle">COMPACT</h1>
      </div>
    </div>
  );
};

export default Header;
