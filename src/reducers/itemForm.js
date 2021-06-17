const initialState = {
    name: "",
    notes: "",
    weight: "",
    quantity: "",
    price: "",
    url: "",
    image: "", 
    purchased: "",
    sent_home: "",
    category: {}
}

const itemForm = (state = initialState, action) => {
  

    switch (action.type) {
       
        case 'UPDATE_ITEM_FORM':
            console.log(action)
            return {
                ...state
                // [action.payload.name]: action.payload.value
            }

        case 'CLEAR_ITEM_FORM':
            return initialState

        default:
            return state
    }
}

export default itemForm