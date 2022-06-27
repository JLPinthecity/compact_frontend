import React from "react";
import Burger from "./Burger.js";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-main">
        <div className="burger-icon">
          <Burger />
        </div>
        <h1 className="siteTitle">COMPACT</h1>
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
