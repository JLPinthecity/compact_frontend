import React from 'react';
import ItemForm from '../components/ItemForm.js';
import { createItem } from '../actions/items.js'
import { connect } from 'react-redux'

const NewItemFormContainer = ({history, createItem}) => {

    const handleSubmit = (itemForm, userId) => {
        // console.log("INSIDE HANDLE SUBMIT userId", userId)
        createItem(itemForm, userId, history)
    };
    
    return (
        <div>
            <ItemForm history={history} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect(null, { createItem })(NewItemFormContainer)

//parent container of itemform
//passing down handleubmit and history
//without connecting mapDispatchToProps, we would simply be invoking createItem the action creator.
//now we have access to the souped-up redux version of createItem