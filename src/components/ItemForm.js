import React from 'react'
import { connect } from 'react-redux'
// import { updateItemForm } from '../actions/itemForm.js'
// import { getCategories } from '../actions/categories.js'

const ItemForm = (props) => {
 // {console.log("inside itemForm categories:", props.categories.categories)} 
    const categoryMapper = () => {
        let {categories} = props.categories
        let list = categories.map(category=>{
            return <option name={category.name} value={category.id}>{category.name}</option>
        })
        // console.log(list)
        return list     
    }
    
    return (
        <form>
            <h1>Add New Item</h1>
            <label>
                Name:
                <input type="text" name="name" placeholder="name" alt="name field"/>
            </label><br></br>

            <label>
                Description or notes:
                <input type="text" name="notes" placeholder="description or notes" alt="notes field"/>
            </label><br></br>

            <label>
                Weight (in ounces):
                <input type="text" name="weight" placeholder="weight (ounces)" alt="weight field"/>
            </label><br></br>

            <label>
                Quantity:
                <input type="text" name="quantity" placeholder="quantity" alt="quantity field"/>
            </label><br></br>

            <label>
                Price:
                <input type="text" name="price" placeholder="price" alt="price field"/>
            </label><br></br>

            <label>
                Link:
                <input type="text" name="url" placeholder="url" alt="url field"/>
            </label><br></br>

            <label>
                Image link:
                <input type="text" name="image" placeholder="image url" alt="image url field"/>
            </label><br></br>

            <label>
                Purchased?
            <select >
            <option name="purchased" value="true">yes</option>
            <option name="purchased" value="false" defaultValue>no</option>
            </select>
            </label><br></br>
            {/* value={this.state.value} */}

            <label>
            Item sent home or worn on person:
            <select>
            <option name="sent_home" value="true">yes</option>
            <option name="sent_home" value="false" defaultValue>no</option>
            </select>
            </label><br></br>

            <label>
            Categories:
            <select>
            {categoryMapper()}
            </select>
            </label><br/><br/>

            <input type="submit" value="Submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCategories: () => dispatch(getCategories())
//     }
// }

export default connect(mapStateToProps)(ItemForm)








