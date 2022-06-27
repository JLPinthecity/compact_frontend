import React from "react";
import { connect } from "react-redux";
import SimplifiedItemCard from "./SimplifiedItemCard.js";
import "./Items.css";

const Items = ({ items }) => {
  const itemCards = items.items.map((item) => (
    <SimplifiedItemCard item={item} key={item.id} />
  ));

  return (
    <div className="gear-list-container">
      <div className="gear-list-intro">
        <div className="gear-grid-item">Your backpack currently weighs</div>
      </div>

      <div className="list-main">{itemCards.length > 0 ? itemCards : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Items);

//items is going to be responsible for rendering individual items
