import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h1 className="siteTitle">COMPACT</h1>
        </Link>
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
