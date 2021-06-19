import React from 'react';

const ItemCard = ({item}) => {
    // debugger
    return (

        item ? 
        <section className="gear"> 
            <div className="product-image">
                <img alt="hiking gear" src= {item.attributes.image} />
            </div>
            
            <div className="product-info">
                <h3>{item.attributes.name}</h3>
                <h3>Category: { item.attributes.category.name }</h3>
                <h4>Price: ${item.attributes.price}</h4>
                <h4>Quantity: {item.attributes.quantity}</h4>
                <h4>Weight: {item.attributes.weight} ounces </h4>
                <h4>Purchased: { item.attributes.purchased ? "no" : "yes"  }</h4>
                <h4>Worn on person or sent home?: { item.attributes.sent_home ? "no" : "yes"  }</h4>
            </div>
        </section>
        : null
    )
}

export default ItemCard
