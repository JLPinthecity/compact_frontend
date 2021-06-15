import React from 'react';

const ItemCard = ({item}) => {

    return (
        <section className="gear"> 
            <div className="product-image">
                <img src= {item.attributes.image} />
            </div>
            
            <div class="product-info">
                <h3>{item.attributes.name}</h3>
                <h4>Price: ${item.attributes.price}</h4>
                <p>Purchased: { item.attributes.purchased ? "no" : "yes"  }</p>
                <h4>Quantity: {item.attributes.quantity}</h4>
                <h4>Weight: {item.attributes.weight} ounces </h4>
                
            </div>
        </section>
    )
}

export default ItemCard


// attributes:
// category: {id: 13, name: "Clothing", created_at: "2021-06-13T22:45:03.436Z", updated_at: "2021-06-13T22:45:03.436Z"}
// category_id: 13
// name: "Welly assorted flex bandages"
// price: 7
// purchased: false
// quantity: 1
// sent_home: false
// url: "https://www.getwelly.com/products/assorted-flex-fabric-bandages-solid-orange"
// user_id: 3
// weight: "0.8"
// __proto__: Object
// id: "52"
// type: "item"
// __proto__: Object