const items = (state = {items: [], loading: false}, action) => {
    console.log("FROM ITEMS REDUCER", action)
    switch (action.type) {
        case "LOADING":
            return  {...state, loading: true }
        
        case "SET_ITEMS":
            return {...state, items: action.items, loading: false}

        case "ADD_ITEMS":
            return state.concat(action.item)
        default:
            return state
    }


}

export default items
