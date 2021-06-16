export const updateSignupForm = (formData) => {
    console.log(formData)
    return { type: 'UPDATE_SIGNUP_FORM',
        payload: formData
    }
}