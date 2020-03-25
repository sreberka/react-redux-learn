import {ADD_NEW_ITEM, FILTER_ITEMS, DELETE_ITEM} from '../index'

const initialState = {
    items: [
        {
            name: 'Smith', text: 'text 1'
        },
        {
            name: 'Sam', text: 'text 2'
        }
     ],
    authorName: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            return {...state, items: [...state.items, action.payload]};
        case DELETE_ITEM:
            let items = state.items.filter((item, index) => index !== action.payload);
            return {...state, items: [...items]};
        case FILTER_ITEMS:
            return {...state, authorName: action.payload};
        default:
            return state
    }
}
