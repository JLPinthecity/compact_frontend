import React from 'react'
import { updateItemForm } from '../actions/itemForm.js'
import { connect } from 'react-redux'

const ItemForm = ({ categories, updateItemForm, itemForm, handleSubmit, userId, editMode }) => {
 // {console.log("inside itemForm categories:", props.categories.categories)} 
    const categoryMapper = () => {
        let list = categories.categories.map(category => {
            if (category.id === 1){
                return <option name={category.name} key={category.id} value={category.id} defaultValue>{category.name}</option>
            }
            else {
                return <option name={category.name} key={category.id} value={category.id}>{category.name}</option>
            }
        })
        return list     
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        updateItemForm(name, value)
    };
    
    return (
        <form className="bigForm" onSubmit={event => {
            event.preventDefault()
            handleSubmit(itemForm, userId);
        }}>

            <h1>Add New Item</h1>
            
            <label>NAME</label> 
            <input type="text" 
                name="name" 
                placeholder="name" 
                alt="name field" 
                value={itemForm.name} 
                onChange={handleChange}/>
            <br />

            <label>DESCRIPTION</label>
            <input type="text" 
                name="notes" 
                placeholder="description or notes" 
                alt="notes field" 
                value={itemForm.notes} 
                onChange={handleChange}/>
            <br />

            <label>WEIGHT</label>
            <input type="text" 
                name="weight" 
                placeholder="weight (ounces)" 
                alt="weight field" 
                value={itemForm.weight} 
                onChange={handleChange}/>
            <br />

            <label>QUANTITY</label>
            <input type="text" 
                name="quantity" 
                placeholder="quantity" 
                alt="quantity field" 
                value={itemForm.quantity} 
                onChange={handleChange}/>
            <br />

            <label>PRICE</label>
            <input type="text" 
                name="price" 
                placeholder="price" 
                alt="price field" 
                value={itemForm.price} 
                onChange={handleChange}/>
            <br />

            <label>LINK</label>
            <input type="text" 
                name="url" 
                placeholder="url" 
                alt="url field" 
                value={itemForm.url} 
                onChange={handleChange}/>
            <br />

            <label>IMAGE LINK</label>
            <input type="text" 
                name="image" 
                placeholder="image url" 
                alt="image url field" 
                value={itemForm.image}
                onChange={handleChange}/>
            <br />

            <label>PURCHASED</label>
            <select name="purchased" value={itemForm.purchased} onChange={handleChange}>
                <option value="false" defaultValue>no</option>
                <option value="true">yes</option>
            </select>
            <br />
           

            <label>ITEM SENT HOME/WORN ON PERSON</label>
            <select name="sent_home" value={itemForm.sent_home} onChange={handleChange}>
                <option value="false" defaultValue>no</option>
                <option value="true">yes</option>
            </select>
            <br />

            <label>CATEGORY</label>
            <select name="category" value={itemForm.category} onChange={handleChange}>
                {categoryMapper()}
            </select >
            <br />

            <input type="submit" 
                className="btn" 
                value={ editMode ? "Update" : "Submit" }/>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.categories,
        itemForm: state.itemForm,
        userId: state.currentUser.id ? state.currentUser.id: ""
    };
};

export default connect(mapStateToProps, { updateItemForm })(ItemForm);

//reminder about mapDispatchToProps. What we import is not what we are calling. Yes, we import the action creator here. We don't invoke it directly. We HAVE to tell redux to invoke it (AKA dispatch the action) or else we won't see the values change in the store.




