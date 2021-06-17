const categories = (state = [], action) => {
    // console.log(action.categories)
    switch (action.type) {
        
        case "SET_CATEGORIES":
            return {...state, categories: action.categories}

        default:
            return state
    }
}

export default categories
