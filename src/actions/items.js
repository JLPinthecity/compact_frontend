import { clearItemForm } from "./itemForm.js";

// const local = "http://localhost:3000";
const url = "https://compact-backend.herokuapp.com";
const itemsPath = "api/v1/items";
//synchronous actions
export const setItems = (items) => ({ type: "SET_ITEMS", items });

export const clearItems = () => {
  return {
    type: "CLEAR_ITEMS",
  };
};

export const addItem = (item) => {
  //   debugger;
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
//happens after createItem fires post fetch request

export const updateItem = (item) => {
  //   debugger;
  return {
    type: "UPDATE_ITEM",
    payload: item,
  };
};
//happens once patch request returns updated object

export const clearItem = (itemId) => {
  // debugger
  return {
    type: "DELETE_ITEM",
    payload: itemId,
  };
};
//happens once destroy action happens on the backend

//asynchronous actions
export const getItems = () => {
  return (dispatch) => {
    const configObj = {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };

    fetch(url + "/" + itemsPath, configObj)
      .then((res) => res.json())

      .then((items) => {
        debugger;
        //items returns an array of all objects with attr nested under attributes
        if (items.error) {
          alert(items.error);
        } else {
          // console.log(items.data)
          dispatch(setItems(items.data));
        }
      })
      .catch(console.log);
  };
};

export const createItem = (itemFormData, userId, history) => {
  debugger;
  // console.log("inside createItem action creator", userId)
  // console.log(itemFormData)
  const item = {
    name: itemFormData.name,
    notes: itemFormData.notes,
    price: parseFloat(itemFormData.price),
    quantity: parseInt(itemFormData.quantity),
    weight: parseFloat(itemFormData.weight),
    url: itemFormData.url,
    image: itemFormData.image,
    purchased: JSON.parse(itemFormData.purchased),
    sent_home: JSON.parse(itemFormData.sent_home),
    category_id: parseInt(itemFormData.category),
    user_id: parseInt(userId),
  };

  // console.log("sending to backend", item)
  return (dispatch) => {
    const configObj = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(item),
    };

    return fetch(url, configObj)
      .then((res) => res.json())
      .then((item) => {
        if (item.error) {
          alert(item.error);
        } else {
          dispatch(addItem(item.data));
          dispatch(clearItemForm());
          history.push(`/items/${item.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const patchItem = (itemFormData, userId, itemId, history) => {
  // debugger
  // console.log("INSIDE PATCHITEM ACTION CREATOR", userId)
  // console.log("INSIDE PATCHITEM ACTION CREATOR", itemFormData)
  const item = {
    name: itemFormData.name,
    notes: itemFormData.notes,
    price: parseFloat(itemFormData.price),
    quantity: parseInt(itemFormData.quantity),
    weight: parseFloat(itemFormData.weight),
    url: itemFormData.url,
    image: itemFormData.image,
    purchased: JSON.parse(itemFormData.purchased),
    sent_home: JSON.parse(itemFormData.sent_home),
    category_id: parseInt(itemFormData.category),
    user_id: parseInt(userId),
    id: parseInt(itemId),
  };

  // console.log("sending to backend from PATCHITEM", item)
  return (dispatch) => {
    const configObj = {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(item),
    };

    return fetch(`${url}/${item.id}`, configObj)
      .then((res) => res.json())
      .then((item) => {
        if (item.error) {
          alert(item.error);
        } else {
          // console.log("THIS IS FROM THE BACKEND/RETURN OF PATCH", item.data)
          dispatch(updateItem(item.data));
          dispatch(clearItemForm());
          history.push(`/items/${item.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const deleteItem = (itemId, history) => {
  // console.log("inside deleteItem action creator", itemId)
  // console.log("inside deleteItem action creator", history)
  return (dispatch) => {
    const configObj = {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };
    return fetch(`${url}/${itemId}`, configObj)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          // console.log("BACK FROM DELETE REQUEST", res)
          dispatch(clearItem(itemId));
          history.push("/items");
        }
      });
  };
};
