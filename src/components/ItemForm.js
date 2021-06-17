import React from 'react'
import { updateItemForm } from '../actions/itemForm.js'
import { getCategories } from '../actions/categories.js'
import { connect } from 'react-redux'

class ItemForm extends React.Component{

    componentDidMount(){
        this.props.getCategories()
    }

    render(){ 
        return (
            
            <form>
                <h1>Add New Item</h1>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="name" />
                </label><br></br>

                <label>
                    Description or notes:
                    <input type="text" name="notes" placeholder="description or notes" />
                </label><br></br>

                <label>
                    Weight (in ounces):
                    <input type="text" name="weight" placeholder="weight (ounces)"/>
                </label><br></br>

                <label>
                    Quantity:
                    <input type="text" name="quantity" placeholder="quantity"/>
                </label><br></br>

                <label>
                    Price:
                    <input type="text" name="price" placeholder="price"/>
                </label><br></br>

                <label>
                    Link:
                    <input type="text" name="url" placeholder="url"/>
                </label><br></br>

                <label>
                    Image link:
                    <input type="text" name="image" placeholder="image url" />
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

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(null, mapDispatchToProps)(ItemForm)









// t.string "name"
// t.text "notes"
// t.string "url"
// t.string "image"
// t.decimal "weight", precision: 15, scale: 10
// t.integer "quantity"
// t.decimal "price", precision: 5, scale: 2
// t.boolean "purchased", default: false
// t.boolean "sent_home", default: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.integer "user_id"
// t.integer "category_id"
