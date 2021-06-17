//synchronous actions
export const updateItemForm = (name, value) => {
    // console.log("from updateitemform", formData)
    const formData = { name, value }
    return {
        type: 'UPDATE_ITEM_FORM', 
        formData
    }
}

export const clearItemForm = () => {
    return {
        type: 'CLEAR_ITEM_FORM'
    }
}


//asynchronous actions