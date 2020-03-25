import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog/Blog';
import { Provider } from 'react-redux';
import {createStore} from "redux";
import {rootReducer} from "./store/reducers";

export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const FILTER_ITEMS = 'FILTER_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Blog />
    </Provider>,
  document.getElementById('root')
);
