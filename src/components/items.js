import React from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard.js'

const Items = ({items}) => {
    // console.log(items.items)
    const itemCards = items.items.map(item => <ItemCard item={item} key={item.id}/>)

    return (
        <div className="gear-list-container">
            {itemCards.length > 0 ? itemCards : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Items)


//items is going to be responsible for rendering individual items