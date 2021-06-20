import React from 'react';
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
    // debugger
    return (

        item ? 
        <section className="gear"> 
            <div className="product-image">
                <img alt="hiking gear" src= {item.attributes.image} />
            </div>
            
            <div className="product-info">
                <h3><Link to={`/items/${item.id}`}>{item.attributes.name}</Link></h3>
                <h3>Category: { item.attributes.category.name }</h3>
                <h4>Price: ${item.attributes.price}</h4>
                <h4>Quantity: {item.attributes.quantity}</h4>
                <h4>Weight: {item.attributes.weight} ounces </h4>
                <h4>Purchased: { item.attributes.purchased ? "no" : "yes"  }</h4>
                <h4>Worn on person or sent home?: { item.attributes.sent_home ? "no" : "yes"  }</h4>

                <Link to={`/items/${item.id}/edit`}>Make changes to this item.</Link>
            </div>
        </section>
        : "There are no items in your gear list."
    )
}

export default ItemCard
