import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {newsReducer} from "./reducers";

export const store = createStore(newsReducer,applyMiddleware(thunkMiddleware))
