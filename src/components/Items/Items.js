import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SimplifiedItemCard from "./SimplifiedItemCard.js";
import Sample from "../Sample";
import "./Items.css";

const Items = (props) => {
  const itemCards = props.items.items.map((item) => (
    <SimplifiedItemCard item={item} key={item.id} />
  ));

  const isLoggedIn = props.loggedIn;

  const weightInOunces = props.weight;

  function doMath(weightInOunces) {
    const result = weightInOunces / 16;
    return result;
  }

  if (isLoggedIn) {
    return (
      <div className="gear-list-container">
        <div className="gear-list-flex">
          <div className="gear-list-grid">
            <div className="gear-grid-item">
              Your backpack currently weighs&nbsp;
              {doMath(weightInOunces)} pounds or {weightInOunces} ounces.
            </div>
          </div>

          <div className="add-new-item-button">
            <Link className="button" to={`/items/new`}>
              Add new item
            </Link>
          </div>
        </div>
        <div className="list-main">
          {itemCards.length > 0 ? itemCards : null}
        </div>
      </div>
    );
  } else {
    return <Sample />;
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loggedIn: state.currentUser,
    weight: state.currentUser.attributes.total_weight,
  };
};

export default connect(mapStateToProps)(Items);
