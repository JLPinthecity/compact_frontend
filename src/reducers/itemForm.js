const initialState = {
    name: "",
    notes: "",
    weight: "",
    quantity: "",
    price: "",
    url: "",
    image: "", 
    purchased: "",
    sent_home: ""
}

const itemForm = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_ITEM_FORM':
            return action.formData

        case 'CLEAR_ITEM_FORM':
            return initialState

        default:
            return state
    }
}

export default itemForm