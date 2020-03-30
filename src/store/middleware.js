import {ADD_NEW_ITEM} from './constants'
import {showAlert} from './actions'

const forbidden = ['fuck', 'spam', 'php'];

export default function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === ADD_NEW_ITEM) {
                const found = forbidden.filter(w => action.payload.text.includes(w) || action.payload.name.includes(w))
                if (found.length) {
                    return dispatch(showAlert(`Do not use "${found.join(', ')}"!` ))
                }
            }
            return next(action)
        }
    }
}