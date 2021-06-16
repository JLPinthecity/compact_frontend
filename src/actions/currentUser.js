import { clearLoginForm } from './loginForm.js'
import { clearSignupForm } from './signupForm.js'
import { getItems } from './items.js'

const url = "http://localhost:3001"
const loginPath = "api/v1/login"
const userPath = "api/v1/get_current_user"
const logoutPath = "api/v1/logout"
const signupPath = "api/v1/signup"

//synchronous action creators
export const setCurrentUser = (user) => ({type: 'SET_CURRENT_USER', user })

export const clearCurrentUser = () => ({type: 'CLEAR_CURRENT_USER'})

//asynchronous action creators
export const getCurrentUser = () => {
    console.log("inside getCurrentUser")
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }

        return fetch(url + "/" + userPath, configObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(clearSignupForm())
                dispatch(getItems())
            }
        })
        .catch(console.log)
    };
};

export const login = (credentials, history) => {
    console.log(credentials)
    return dispatch => {

        const configObj = {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(credentials)
        };

        return fetch(url + "/" + loginPath, configObj)
        .then(res => res.json())
        .then(res => {
            if (res.error){
                alert(res.error)
            }else {
                dispatch(setCurrentUser(res.data))
                dispatch(clearLoginForm())
                dispatch(getItems())
                history.push("/")
            };
        })
        .catch(console.log)
    };
};

export const logout = () => {
    console.log("inside logout action creator from handleSubmit in logout component")
    return dispatch => {
       
        dispatch(clearCurrentUser());

        const configObj = {
            credentials: "include",
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        };

        return fetch(url + "/" + logoutPath, configObj)
    };
};

export const signup = (formData, history) => {
    console.log(formData)
    return dispatch => {

        const newUser = {
            user: formData
        }

        const configObj = {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(newUser)
        };

        return fetch(url + "/" + signupPath, configObj)
            .then(res => res.json())
            .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                dispatch(setCurrentUser(user.data))
                console.log("user sent back from backend is", user.data)
                dispatch(clearLoginForm())
                dispatch(getItems())
                history.push("/")
            };
        })
        .catch(console.log)
    };
};

//when user signs up:
//1) send user to backend to persist
//2) set as current user on front end
//3) clear signup form


//dispatch is a function that comes from redux
//THUNK allows us to return a function with dispatch as an argument 
//a function receives dispatch as an argument
//then we can return a fetch and use dispatch as needed
//here, we call dispatch as a function in the else and call the action creator of setCurrentUser, passing in user object from backend
//action creator is a function that returns an action, which has a type and payload


//credentials include will send cookies back to backend to enable sessions
//needed in all fetch requests