
const url = "http://localhost:3001/api/v1/items"
//synchronous actions 
export const setItems = (items) => ({type: 'SET_ITEMS', items })

//asynchronous actions
export const getItems = () => {
   
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
        .then(items => {
            //items returns an array of all objects with attr nested under attributes
            if (items.error){
                alert(items.error)
            }else{
                // console.log(items.data)
                dispatch(setItems(items.data))
            }
        })
        .catch(console.log)

    }
}
