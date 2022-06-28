import React from "react";
import { updateItemForm } from "../../actions/itemForm.js";
import { connect } from "react-redux";
import "../Forms/Form.css";

const ItemForm = ({
  categories,
  updateItemForm,
  itemForm,
  handleSubmit,
  userId,
  editMode,
}) => {
  // {console.log("inside itemForm categories:", props.categories.categories)}
  const categoryMapper = () => {
    let list = categories.categories.map((category) => {
      if (category.id === 1) {
        return (
          <option
            name={category.name}
            key={category.id}
            value={category.id}
            defaultValue
          >
            {category.name}
          </option>
        );
      } else {
        return (
          <option name={category.name} key={category.id} value={category.id}>
            {category.name}
          </option>
        );
      }
    });
    return list;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateItemForm(name, value);
  };

  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(itemForm, userId);
      }}
    >
      <div className="form-main">
        <h1 className="form-title">Add New Item</h1>

        <div className="input-container">
          <label className="input-title">NAME</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            alt="name field"
            value={itemForm.name}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label className="input-title">DESCRIPTION</label>
          <input
            type="text"
            name="notes"
            placeholder="description or notes"
            alt="notes field"
            value={itemForm.notes}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">WEIGHT</label>
          <input
            type="text"
            name="weight"
            placeholder="weight (ounces)"
            alt="weight field"
            value={itemForm.weight}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">QUANTITY</label>
          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            alt="quantity field"
            value={itemForm.quantity}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">PRICE</label>
          <input
            type="text"
            name="price"
            placeholder="price"
            alt="price field"
            value={itemForm.price}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">LINK</label>
          <input
            type="text"
            name="url"
            placeholder="url"
            alt="url field"
            value={itemForm.url}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">IMAGE LINK</label>
          <input
            type="text"
            name="image"
            placeholder="image url"
            alt="image url field"
            value={itemForm.image}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-title">PURCHASED</label>
          <select
            name="purchased"
            value={itemForm.purchased}
            onChange={handleChange}
            className="form-input"
          >
            <option value="false" defaultValue>
              no
            </option>
            <option value="true">yes</option>
          </select>
        </div>

        <div className="input-container">
          <label className="input-title">ITEM SENT HOME/WORN ON PERSON</label>
          <select
            name="sent_home"
            value={itemForm.sent_home}
            onChange={handleChange}
          >
            <option value="false" defaultValue>
              no
            </option>
            <option value="true">yes</option>
          </select>
        </div>

        <div className="input-container">
          <label className="input-title">CATEGORY</label>
          <select
            name="category"
            value={itemForm.category}
            onChange={handleChange}
          >
            {categoryMapper()}
          </select>
        </div>

        <input
          type="submit"
          className="btn"
          value={editMode ? "Update" : "Submit"}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    itemForm: state.itemForm,
    userId: state.currentUser.id ? state.currentUser.id : "",
  };
};

export default connect(mapStateToProps, { updateItemForm })(ItemForm);

//reminder about mapDispatchToProps. What we import is not what we are calling.
//Yes, we import the action creator here. We don't invoke it directly.
//We HAVE to tell redux to invoke it (AKA dispatch the action) or else we won't see the values change in the store.
