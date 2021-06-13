const initialState = {
    email: "",
    password: ""
}

const loginForm = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_LOGIN_FORM':
            return 

        default:
            return state
    }


}

export default loginForm

//we want to set up current user in state
