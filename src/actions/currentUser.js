//synchronous action creators
const url = "http://localhost:3000"
const loginPath = "api/v1/login"

export const setCurrentUser = (user) => ({type: 'SET_CURRENT_USER', payload: user})

//asynchronous action creators (AKA we need to send fetch to backend)
export const login = (credentials) => {
    return dispatch => {

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({email: "defaultuser@gmail.com", password: "defaultuser"})
        }

        return fetch(url + "/" + loginPath, configObj)
    }
}

//thunk allows us to return a function
//a function receives dispatch as an argument
//then we can return a fetch and use dispatch as needed







//actions are objects
//action creators receive an argument, which takes the place of our second argument of payload