//synchronous actions
export const updateItemForm = (newItemFormData) => {
    return {
        type: 'UPDATE_ITEM_FORM', payload: newItemFormData
    }
}

export const clearItemForm = () => {
    return {
        type: 'CLEAR_ITEM_FORM'
    }
}


//asynchronous actions