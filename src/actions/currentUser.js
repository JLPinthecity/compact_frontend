//synchronous action creators
const url = "http://localhost:3001"
const loginPath = "api/v1/login"
const userPath = "api/v1/get_current_user"

export const setCurrentUser = (user) => ({type: 'SET_CURRENT_USER', user})

//asynchronous action creators
export const getCurrentUser = () => {
    return dispatch => {
        const configObj = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }

        return fetch(url + "/" + userPath, configObj)
        .then(res => res.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
    }


}

export const login = (credentials) => {
    console.log(credentials)
    return dispatch => {

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(credentials)
        };

        return fetch(url + "/" + loginPath, configObj)
        .then(res => res.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                dispatch(setCurrentUser(user))
            };
        })
        .catch(console.log)
    }
}


//dispatch is a function that comes from redux
//thunk allows us to return a function
//a function receives dispatch as an argument
//then we can return a fetch and use dispatch as needed
//here, we call dispatch as a function in the else and call the action creator of setCurrentUser, passing in user object from backend
//action creator is a function that returns an action, which has a type and payload