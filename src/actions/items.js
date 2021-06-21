import { clearItemForm } from './itemForm.js'

const url = "http://localhost:3001/api/v1/items"

//synchronous actions 
export const setItems = (items) => ({type: 'SET_ITEMS', items })

export const clearItems = () => {
    return {
        type: 'CLEAR_ITEMS'
    }
}

export const addItem = (item) => {
    debugger
    return {
        type: 'ADD_ITEM', 
        payload: item 
    }
}

export const updateItem = (item) => {
    debugger
    return {
        type: 'UPDATE_ITEM', 
        payload: item 
    }
}
//asynchronous actions
export const getItems = () => {
   
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }

        fetch(url, configObj)
        .then(res => res.json())
        .then(items => {
            //items returns an array of all objects with attr nested under attributes
            if (items.error){
                alert(items.error)
            }else{
                // console.log(items.data)
                dispatch(setItems(items.data))
            }
        })
        .catch(console.log)
    }
}

export const createItem = (itemFormData, userId, history) => {
    debugger
    // console.log("inside createItem action creator", userId)
    // console.log(itemFormData)    
    const item ={
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
        user_id: parseInt(userId)
    }

    // console.log("sending to backend", item)
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(item)
        };

        return fetch(url, configObj)
        .then(res => res.json())
        .then(item => {
            if (item.error){
                alert(item.error)
            }else {
                dispatch(addItem(item.data))
                dispatch(clearItemForm())
                history.push(`/items/${item.data.id}`)
            };
        })
        .catch(console.log)
    };
};

export const patchItem = (itemFormData, userId, itemId, history) => {
    // debugger
    // console.log("INSIDE PATCHITEM ACTION CREATOR", userId)
    // console.log("INSIDE PATCHITEM ACTION CREATOR", itemFormData)    
    const item ={
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
        id: parseInt(itemId)
    }

    console.log("sending to backend from PATCHITEM", item)
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(item)
        };

        return fetch(`${url}/${item.id}`, configObj)
        .then(res => res.json())
        .then(item => {
            if (item.error){
                alert(item.error)
            }else {
                dispatch(updateItem(item.data))
                dispatch(clearItemForm())
                history.push(`/items/${item.data.id}`)
            };
        })
        .catch(console.log)
    };
};