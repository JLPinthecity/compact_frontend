export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

//action creator is a function that returns an action
//this action creator receives form data as argument 
