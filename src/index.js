import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog/Blog';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from './store/reducers';
import forbiddenWordsMiddleware from './store/middleware';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './store/sagas'

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, logger, forbiddenWordsMiddleware, saga));

saga.run(sagaWatcher)

ReactDOM.render(
    <Provider store={store}>
        <Blog />
    </Provider>,
  document.getElementById('root')
);
