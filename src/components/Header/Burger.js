import React from "react";
import "../Header/Burger.css";

const Burger = () => {
  return (
    <button className="toggle-button">
      <div className="toggle-button__line" id="line1" />
      <div className="  toggle-button__line" id="line2" />
      <div className="toggle-button__line" id="line3" />
    </button>
  );
};

export default Burger;
