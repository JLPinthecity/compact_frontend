//synchronous actions
export const updateItemForm = (formData) => {
    // console.log("from updateitemform", formData)
    return {
        type: 'UPDATE_ITEM_FORM', formData
    }
}

export const clearItemForm = () => {
    return {
        type: 'CLEAR_ITEM_FORM'
    }
}


//asynchronous actions