const initialState = {
    name: "",
    email: "",
    password: ""
}

const signupForm = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_SIGNUP_FORM':
            return action.formData

        case 'CLEAR_SIGNUP_FORM':
            return initialState

        default:
            return state
    }
}

export default signupForm

//we want to set up current user in state

