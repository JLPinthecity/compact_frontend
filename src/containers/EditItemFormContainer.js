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
        // debugger
        // console.log("INSIDE HANDLE SUBMIT userId", userId)
        const { patchItem, item, history } = this.props
        const itemId = item.id
        patchItem(itemForm, userId, itemId, history)
    };

    handleClick = () => {

    }



    render(){
        return (
            <>
            <ItemForm editMode history={this.props.history} handleSubmit={this.handleSubmit}/>
            <br/>
            <button onClick={this.handleClick}>Delete item</button>
            </>

        )
    }
}

export default connect(null, { patchItem, setEditItemForm })(EditItemFormContainer)

//we need to fire setEditItemForm when we click on edit button
//adding an attribute like "editMode" while calling a component will make it a boolean and auto-set it to true

  //from itemForm, we pass handleSubmit itemForm and userId
    //when we submit edit form
    //we want to send patchItem fetch to backend
    //dispatch updateItem action to update the item in our store 