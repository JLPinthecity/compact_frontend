const initialState = {
    items: [],
    loading: false
}


const items = (state = initialState, action) => {
    // console.log("FROM ITEMS REDUCER", action)
    switch (action.type) {
        case "LOADING":
            return  {...state, loading: true }
        
        case "SET_ITEMS":
            return {...state, items: action.items, loading: false}

        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }

        case "UPDATE_ITEM":
            console.log("INSIDE UPDATEITEM REDUCER", action)
            return { state }

        case "CLEAR_ITEMS":
            return initialState

        default:
            return state
    }


}

export default items
