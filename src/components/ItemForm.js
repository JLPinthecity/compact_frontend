import React from 'react'
import { connect } from 'react-redux'
import { updateItemForm } from '../actions/itemForm.js'
import { createItem } from '../actions/items.js'

const ItemForm = ({categories, updateItemForm, itemForm, history, createItem, currentUser}) => {

 // {console.log("inside itemForm categories:", props.categories.categories)} 
    const categoryMapper = () => {
        let list = categories.categories.map(category=>{
            if (category.id === 1){
                return <option name={category.name} key={category.id} value={category.id} defaultValue>{category.name}</option>
            }
            else {
                return <option name={category.name} key={category.id} value={category.id}>{category.name}</option>
            }

        })
        // console.log(list)
        return list     
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        updateItemForm(name, value)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        const userId = currentUser.id
        createItem(itemForm, userId, history)
    }
    
    return (
        <form className="bigForm" onSubmit={handleSubmit}>
            <h1>Add New Item</h1>
            <label>
                NAME  <input type="text" name="name" placeholder="name" alt="name field" value={itemForm.name} onChange={handleChange}/>
            </label><br></br>

            <label>
                DESCRIPTION
                <input type="text" name="notes" placeholder="description or notes" alt="notes field" value={itemForm.notes} onChange={handleChange}/>
            </label><br></br>

            <label>
                WEIGHT 
                <input type="text" name="weight" placeholder="weight (ounces)" alt="weight field" value={itemForm.weight} onChange={handleChange}/>
            </label><br></br>

            <label>
                QUANTITY
                <input type="text" name="quantity" placeholder="quantity" alt="quantity field" value={itemForm.quantity} onChange={handleChange}/>
            </label><br></br>

            <label>
                PRICE 
                <input type="text" name="price" placeholder="price" alt="price field" value={itemForm.price} onChange={handleChange}/>
            </label><br></br>

            <label>
                LINK 
                <input type="text" name="url" placeholder="url" alt="url field" value={itemForm.url} onChange={handleChange}/>
            </label><br></br>

            <label>
                IMAGE LINK
                <input type="text" name="image" placeholder="image url" alt="image url field" value={itemForm.image}onChange={handleChange}/>
            </label><br/><br/>

            <label>
                PURCHASED
            <select name="purchased" value={itemForm.purchased} onChange={handleChange}>
                <option value="false" defaultValue>no</option>
                <option value="true">yes</option>
            </select>
            </label><br/><br/>
           

            <label>
            ITEM SENT HOME/WORN ON PERSON
            <select name="sent_home" value={itemForm.sent_home} onChange={handleChange}>
                <option value="false" defaultValue>no</option>
                <option value="true">yes</option>
            </select>
            </label><br/><br/>

            <label>
            CATEGORY
            <select name="category" value={itemForm.category} onChange={handleChange}>
                {categoryMapper()}
            </select >
            </label><br/><br/>

            <input type="submit" className="btn" value="Submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        itemForm: state.itemForm,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { updateItemForm, createItem })(ItemForm)

//reminder about mapDispatchToProps. What we import is not what we are calling. Yes, we import the action creator here. We don't invoke it directly. We HAVE to tell redux to invoke it (AKA dispatch the action) or else we won't see the values change in the store.




