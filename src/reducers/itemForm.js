const initialState = {
    name: "",
    notes: "",
    weight: "",
    quantity: "",
    price: "",
    url: "",
    image: "", 
    purchased: "false",
    sent_home: "false",
    category: "1"
}

const itemForm = (state = initialState, action) => {
//   console.log("action in itemformreducer is", action)

    switch (action.type) {
       
        case 'UPDATE_ITEM_FORM':
            // console.log("from update item form reducer", action)
            return {
                ...state,
                [action.formData.name]: action.formData.value
              }

        case 'CLEAR_ITEM_FORM':
            return initialState

        case 'SET_EDIT_ITEM_FORM':
            console.log("from setedititemform reducer", action)
            return action.editFormData

        default:
            return state
    }
}

export default itemForm