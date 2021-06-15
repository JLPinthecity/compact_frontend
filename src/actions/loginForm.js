export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

export const clearLoginForm = () => {
    return {
        type: "CLEAR_LOGIN_FORM"
    }
}

//action creator is a function that returns an action
//this action creator receives form data as argument 
