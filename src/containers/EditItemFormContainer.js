import React from 'react';
import ItemForm from '../components/ItemForm.js';
import { patchItem } from '../actions/items.js'
import { setEditItemForm } from '../actions/itemForm.js'
import { connect } from 'react-redux'

class EditItemFormContainer extends React.Component {
    
    componentDidMount(){
        // debugger
        this.props.item && this.props.setEditItemForm(this.props.item)
    }

    handleSubmit = (itemForm, userId) => {
        // console.log("INSIDE HANDLE SUBMIT userId", userId)
        const { patchItem, item, history } = this.props
        patchItem(itemForm, userId, history)
    };
    
    //when we submit edit form
    //we want to send patchItem fetch to backend
    //dispatch updateItem action to update the item in our store 

    render(){
        return (
            <ItemForm editMode history={this.props.history} handleSubmit={this.handleSubmit}/>
        )
    }
}


export default connect(null, { patchItem, setEditItemForm })(EditItemFormContainer)

//we need to fire setEditItemForm when we click on edit button
//adding an attribute like "editMode" while calling a component will make it a boolean and auto-set it to true