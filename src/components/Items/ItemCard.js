import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const ItemCard = ({ item }) => {
  return item ? (
    <section className="item-container">
      <div className="item-main">
        <div className="image-left">
          <img alt="hiking gear" src={item.attributes.image} />
        </div>

        <div className="product-info-right">
          <h3>
            <Link to={`/items/${item.id}`}>{item.attributes.name}</Link>
          </h3>
          <h3>Category: {item.attributes.category.name}</h3>
          <h3>Description: {item.attributes.notes}</h3>
          <h4>Price: ${item.attributes.price}</h4>
          <h4>Quantity: {item.attributes.quantity}</h4>
          <h4>Weight: {item.attributes.weight} ounces </h4>
          <h4>Purchased: {item.attributes.purchased ? "no" : "yes"}</h4>
          <h4>
            Worn on person or sent home?:{" "}
            {item.attributes.sent_home ? "no" : "yes"}
          </h4>

          <Link to={`/items/${item.id}/edit`}>
            <button className="btn">Edit item</button>
          </Link>
        </div>
      </div>
    </section>
  ) : (
    "There are no items in your gear list."
  );
};

export default ItemCard;
