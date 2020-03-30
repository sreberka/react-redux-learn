import {ADD_NEW_ITEM, FILTER_ITEMS, DELETE_ITEM, FETCH_DATA_SUCCESS, FETCH_DATA_LOADING, SHOW_ALERT, FETCH_DATA, SHOW_DATA_ALERT} from './constants'

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

export const dataLoading = (data) => {
    return {
        type: FETCH_DATA_LOADING,
        payload: data
    }
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
};

export const showAlert = (text) => {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}

export const showDataAlert = (text) => {
    return {
        type: SHOW_DATA_ALERT,
        payload: text
    }
}

export const fetchData = () => {
    return {
        type: FETCH_DATA
    }
    // thunk:
    // return dispatch => {
    //     dispatch(dataLoading(true))
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then(function (response) {
    //             dispatch(fetchDataSuccess(response));
    //             dispatch(dataLoading(false))
    //         })
    // };
};