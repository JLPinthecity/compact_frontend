import React from 'react'

const ItemForm = () => {
    return (
        
        <form>
            <h1>Add New Item</h1>
            <label>
                Name:
                <input type="text" name="name" />
            </label><br></br>

            <label>
                Description or notes:
                <input type="text" name="notes" />
            </label><br></br>

            <label>
                Weight (in ounces):
                <input type="text" name="weight" />
            </label><br></br>

            <label>
                Quantity:
                <input type="text" name="quantity" />
            </label><br></br>

            <label>
                Price:
                <input type="text" name="price" />
            </label><br></br>

            <label>
                Link:
                <input type="text" name="url" />
            </label><br></br>

            <label>
                Image link:
                <input type="text" name="image" />
            </label><br></br>

            <label>
                Purchased?
            <select >
            <option name="purchased" value="yes">yes</option>
            <option name="purchased" value="no" selected>no</option>
            </select>
            </label><br></br>
            {/* value={this.state.value} */}

            <label>
               Item sent home or worn on person:
            <select>
            <option name="sent_home" value="yes">yes</option>
            <option name="sent_home" value="no" selected>no</option>
            </select>
            </label><br></br>

            <input type="submit" value="Submit" />
        </form>
      
    )
}

export default ItemForm



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
