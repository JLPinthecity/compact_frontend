import React from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard.js'

const Items = () => {
    return (
        <div>
            "ITEMS"
            <ItemCard />
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