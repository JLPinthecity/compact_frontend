const currentUser = (state = null, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user

        default:
            return state
    }


}

export default currentUser

//we want to set up current user in state
