const initialState = {
    email: "",
    password: ""
}

const loginForm = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_LOGIN_FORM':
            return action.formData

        case 'CLEAR_LOGIN_FORM':
            return initialState

        default:
            return state
    }


}

export default loginForm

//we want to set up current user in state
//added clear login form bc after logging out, login inputs remained 
