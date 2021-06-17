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
    // console.log(action.payload)

    switch (action.type) {
        case 'UPDATE_ITEM_FORM':
            return {
                ...state, 
                [action.newItemFormData.name]: action.newItemFormData.value
            }

        case 'CLEAR_ITEM_FORM':
            return initialState

        default:
            return state
    }
}

export default itemForm