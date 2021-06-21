const initialState = {
    items: [],
    loading: false
}

const items = (state = initialState, action) => {
    console.log("FROM ITEMS REDUCER state is", state)
    switch (action.type) {
        case "LOADING":
            return  {...state, loading: true }
        
        case "SET_ITEMS":
            return {...state, items: action.items, loading: false}

        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }

        case "UPDATE_ITEM":
            return {...state, items: state.items.map(item => item.id === action.payload.id ? action.payload : item) }
            
        case "CLEAR_ITEMS":
            return initialState

        default:
            return state
    }


}

export default items
