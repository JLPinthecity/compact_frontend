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

export const setEditItemForm = (item) => {
    // debugger
    const editItemFormData ={
        name: item.attributes.name,
        notes: item.attributes.notes,
        price: item.attributes.price,
        quantity: item.attributes.quantity, 
        weight: item.attributes.weight,
        url: item.attributes.url, 
        image: item.attributes.image,
        purchased: item.attributes.purchased,
        sent_home: item.attributes.sent_home,
        category: item.attributes.category.id
    }

    return {
        type: 'SET_EDIT_ITEM_FORM',
        payload: item
    }
}

//we need to repopulate empty item form with existing values from redux