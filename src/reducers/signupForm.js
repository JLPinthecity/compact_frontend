const initialState = {
    email: "",
    password: ""
}

const signupForm = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_SIGNUP_FORM':
            return action.formData

        case 'CLEAR_LOGIN_FORM':
            return initialState

        default:
            return state
    }
}

export default signupForm