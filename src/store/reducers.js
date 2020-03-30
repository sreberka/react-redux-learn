import {combineReducers} from "redux";
import {ADD_NEW_ITEM, FILTER_ITEMS, DELETE_ITEM, FETCH_DATA_SUCCESS, FETCH_DATA_LOADING, SHOW_ALERT, FETCH_DATA, SHOW_DATA_ALERT} from './constants'


const initialStateItem = {
    items: [
        {
            name: 'Smith', text: 'text 1'
        },
        {
            name: 'Sam', text: 'text 2'
        }
     ],
    authorName: '',
    alert: null

}

const itemsReducer = (state = initialStateItem, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            return {...state, items: [...state.items, action.payload]};
        case DELETE_ITEM:
            let items = state.items.filter((item, index) => index !== action.payload);
            return {...state, items: [...items]};
        case FILTER_ITEMS:
            return {...state, authorName: action.payload};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        default: return state
    }
}

const initialStateData = {
    data: {},
    dataLoading: false,
    alert: null
}

const dataReducer = (state = initialStateData, action) => {
    switch (action.type) {
        case FETCH_DATA_LOADING:
            return {...state, dataLoading: action.payload};
        case FETCH_DATA_SUCCESS:
            return {...state, data: action.payload};
        case SHOW_DATA_ALERT:
            return {...state, alert: action.payload};
        default: return state
    }
}

export const rootReducer = combineReducers({
    item: itemsReducer,
    data: dataReducer
})
