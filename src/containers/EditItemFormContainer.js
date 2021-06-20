import React from 'react';
import ItemForm from '../components/ItemForm.js';
import { updateItem } from '../actions/items.js'
import { setEditItemForm } from '../actions/itemForm.js'
import { connect } from 'react-redux'

class EditItemFormContainer extends React.Component {

    componentDidMount(){
        this.props.setEditItemForm(this.props.item)
    }

    handleSubmit = (itemForm, userId) => {
        // console.log("INSIDE HANDLE SUBMIT userId", userId)
        const { updateItem, history } = this.props
        updateItem(itemForm, userId, history)
    };
    
    render(){
        return (
            <ItemForm history={history} handleSubmit={handleSubmit}/>
        )
    }
}


export default connect(null, { updateItem, setEditItemForm })(EditItemFormContainer)

//we need to fire setEditItemForm when we click on edit button