const categories = (state = {categories: []}, action) => {
   
    switch (action.type) {

        case "SET_CATEGORIES":
            console.log("from categories reducer", action.categories)
            return {...state, categories: action.categories}

        default:
            return state
    }
}

export default categories
