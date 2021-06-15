const items = (state = {items: [], loading: false}, action) => {
    console.log(action.items)
    switch (action.type) {
        case "LOADING":
            return  {...state, loading: true }
        
        case "SET_ITEMS":
            return {...state, items: action.items, loading: false}

        default:
            return state
    }


}

export default items

//@@INIT will return default state of all reducers

//the reducer is where the change actually happens