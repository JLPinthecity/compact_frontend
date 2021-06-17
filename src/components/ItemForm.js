import React from 'react'
import { connect } from 'react-redux'
import { updateItemForm } from '../actions/itemForm.js'

const ItemForm = ({categories, updateItemForm, itemForm}) => {
 // {console.log("inside itemForm categories:", props.categories.categories)} 
    const categoryMapper = () => {
        let list = categories.categories.map(category=>{
            return <option name={category.name} value={category.id}>{category.name}</option>
        })
        // console.log(list)
        return list     
    }

    const handleChange = (event) => {
        // debugger
        const newItemFormData = {
            ...itemForm,
            [event.target.name]: event.target.value
        }
        updateItemForm(newItemFormData)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inside handle submit.. need to add another action creator to dispatch")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Item</h1>
            <label>
                Name:
                <input type="text" name="name" placeholder="name" alt="name field" value={itemForm.name} onChange={handleChange}/>
            </label><br></br>

            <label>
                Description or notes:
                <input type="text" name="notes" placeholder="description or notes" alt="notes field" value={itemForm.notes} onChange={handleChange}/>
            </label><br></br>

            <label>
                Weight (in ounces):
                <input type="text" name="weight" placeholder="weight (ounces)" alt="weight field" value={itemForm.weight} onChange={handleChange}/>
            </label><br></br>

            <label>
                Quantity:
                <input type="text" name="quantity" placeholder="quantity" alt="quantity field" value={itemForm.quantity} onChange={handleChange}/>
            </label><br></br>

            <label>
                Price:
                <input type="text" name="price" placeholder="price" alt="price field" value={itemForm.price} onChange={handleChange}/>
            </label><br></br>

            <label>
                Link:
                <input type="text" name="url" placeholder="url" alt="url field" value={itemForm.url} onChange={handleChange}/>
            </label><br></br>

            <label>
                Image link:
                <input type="text" name="image" placeholder="image url" alt="image url field" value={itemForm.image}onChange={handleChange}/>
            </label><br></br>

            <label>
                Purchased?
            <select name="purchased" onChange={handleChange}>
            <option value="false" defaultValue>no</option>
            <option value="true">yes</option>
           
            </select>
            </label><br></br>
            {/* value={this.state.value} */}

            <label>
            Item sent home or worn on person:
            <select name="sent_home" onChange={handleChange}>
            <option value="false" defaultValue>no</option>
            <option value="true">yes</option>
          
            </select>
            </label><br></br>

            <label>
            Categories:
            <select name="category" onChange={handleChange}>
            {categoryMapper()}
            </select >
            </label><br/><br/>

            <input type="submit" value="Submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        itemForm: state.itemForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItemForm: () => dispatch(updateItemForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)

//reminder about mapDispatchToProps. What we import is not what we are calling. Yes, we import the action creator here. We don't invoke it directly. We HAVE to tell redux to invoke it (AKA dispatch the action) or else we won't see the values change in the store.




