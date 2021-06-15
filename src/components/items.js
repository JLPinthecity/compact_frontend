import React from 'react';
import { connect } from 'react-redux';


const Items = () => {
    return (
        <div>
            "ITEMS"
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