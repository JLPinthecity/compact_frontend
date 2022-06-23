import React from "react";
import "./Burger.css";

function Burger(props) {
  return (
    <button>
      <div className="toggle-button" id="line1" />
      <div className="toggle-button" id="line2" />
      <div className="toggle-button" id="line3" />
    </button>
  );
}

export default Burger;
