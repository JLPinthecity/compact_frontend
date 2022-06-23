import React from "react";
import "./Burger.css";

function Burger(props) {
  return (
    <button>
      <div className="toggle-button__line" id="line1" />
      <div className="toggle-button__line" id="line2" />
      <div className="toggle-button__line" id="line3" />
    </button>
  );
}

export default Burger;
