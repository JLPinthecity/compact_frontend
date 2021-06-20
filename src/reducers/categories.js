const initialState = {
    categories: []
}
const categories = (state = initialState, action) => {
   
    switch (action.type) {

        case "SET_CATEGORIES":
            // console.log("from categories reducer", action.categories)
            return {...state, categories: action.categories}
        case "CLEAR_CATEGORIES":
            return initialState

        default:
            return state
    }
}

export default categories
