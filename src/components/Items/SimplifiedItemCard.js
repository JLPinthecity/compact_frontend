import React from "react";
import { Link } from "react-router-dom";
// import "./Item.css";

const SimplifiedItemCard = ({ item }) => {
  return item ? (
    <section className="simplified-item-container">
      <div className="simplified-item-main">
        <div className="simplified-image-left">
          <img alt="hiking-gear" src={item.attributes.image} />
        </div>

        <div className="simplified-product-info-right">
          <h3>
            <Link to={`/items/${item.id}`}>{item.attributes.name}</Link>
          </h3>

          <Link to={`/items/${item.id}/edit`}>
            <button className="btn">See item</button>
          </Link>
        </div>
      </div>
    </section>
  ) : (
    "There are no items in your gear list."
  );
};

export default SimplifiedItemCard;
