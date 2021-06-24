const initialState = {
    items: []
}

const items = (state = initialState, action) => {
    // console.log("FROM ITEMS REDUCER state is", state)
    switch (action.type) {
        
        case "SET_ITEMS":
            return {...state, items: action.items}

        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }

        case "UPDATE_ITEM":
            return {...state, items: state.items.map(item => item.id === action.payload.id ? action.payload : item) }
            
        case "CLEAR_ITEMS":
            return initialState
        
        case "DELETE_ITEM":
            return state

        default:
            return state
    }


}

export default items
