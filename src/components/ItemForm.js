import React from 'react'
import { connect } from 'react-redux'
import { updateItemForm } from '../actions/itemForm.js'

const ItemForm = (props) => {
    // debugger
 // {console.log("inside itemForm categories:", props.categories.categories)} 
    const categoryMapper = () => {
        let {categories} = props.categories
        let list = categories.map(category=>{
            return <option name={category.name} value={category.id}>{category.name}</option>
        })
        // console.log(list)
        return list     
    }

    const handleChange = (event) => {
        // debugger
        const newItemFormData = {
            ...props.itemForm,
            [event.target.name]: event.target.value
        }
        props.updateItemForm(newItemFormData)
    }
    
    return (
        <form>
            <h1>Add New Item</h1>
            <label>
                Name:
                <input type="text" name="name" placeholder="name" alt="name field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Description or notes:
                <input type="text" name="notes" placeholder="description or notes" alt="notes field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Weight (in ounces):
                <input type="text" name="weight" placeholder="weight (ounces)" alt="weight field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Quantity:
                <input type="text" name="quantity" placeholder="quantity" alt="quantity field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Price:
                <input type="text" name="price" placeholder="price" alt="price field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Link:
                <input type="text" name="url" placeholder="url" alt="url field" onChange={handleChange}/>
            </label><br></br>

            <label>
                Image link:
                <input type="text" name="image" placeholder="image url" alt="image url field" onChange={handleChange}/>
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

//we import the action creator here, we need to tell redux to invoke it or else we won't see the values change in the store




