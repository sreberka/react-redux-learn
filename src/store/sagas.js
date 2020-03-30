import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_DATA_SUCCESS, FETCH_DATA} from '../store/constants'
import {dataLoading, showDataAlert} from './actions'

export function* sagaWatcher() {
    yield takeEvery(FETCH_DATA, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(dataLoading(true));
        const payload = yield call(fetchPosts);
        yield put({ type: FETCH_DATA_SUCCESS, payload });
        yield put(dataLoading(false))
    } catch (e) {
        yield put(showDataAlert('Something went wrong!'));
        yield put(dataLoading(false))
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return await response.json()
}