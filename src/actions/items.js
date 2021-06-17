import { clearItemForm } from './itemForm.js'
 
const url = "http://localhost:3001/api/v1/items"
//synchronous actions 
export const setItems = (items) => ({type: 'SET_ITEMS', items })

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

export const createItem = (itemFormData, userId) => {
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

    console.log("sending to backend", item)
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
        .then(res => {
            if (res.error){
                alert(res.error)
            }else {
                dispatch(clearItemForm())

            };
        })
        .catch(console.log)
    };
};

//need to clear itemform
//set item