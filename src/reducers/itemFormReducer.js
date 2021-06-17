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
//   console.log("action in itemformreducer is", action)

    switch (action.type) {
       
        case 'UPDATE_ITEM_FORM':
            // console.log(action)
            return action.formData

        case 'CLEAR_ITEM_FORM':
            return initialState

        default:
            return state
    }
}

export default itemForm