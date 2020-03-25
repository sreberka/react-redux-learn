import {ADD_NEW_ITEM, FILTER_ITEMS, DELETE_ITEM} from '../index'

export const addNewItem = (newItem) => {
    return {
        type: ADD_NEW_ITEM,
        payload: newItem
    }
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
};

export const filterItem = (name) => {
    return {
        type: FILTER_ITEMS,
        payload: name
    }
};