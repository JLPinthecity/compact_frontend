const initialState = {
    name: "",
    weight: "",
    quantity: "",
    price: "",
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