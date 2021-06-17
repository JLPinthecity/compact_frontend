
const url = "http://localhost:3001/api/v1/categories"
//synchronous actions 
export const setCategories = (categories) => {
    // console.log(categories)  works
    return {
        type: 'SET_CATEGORIES', categories 
    }
}

//asynchronous actions
export const getCategories = () => {
    // console.log("inside getCategories")
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }

        fetch(url, configObj)
        .then(res => res.json())
        .then(categories => {
            if (categories.error){
                alert(categories.error)
            }else{
                // console.log("categories:", categories)
                dispatch(setCategories(categories))
            }
        })
        .catch(console.log)

    }
}
