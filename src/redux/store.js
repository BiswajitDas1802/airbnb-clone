import { applyMiddleware, createStore,useMiddleware } from "redux";
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {reducer} from "./reducer"

const middleware = [thunk]

if(process.env.NODE_ENV !== 'production'){
    middleware.push(logger)
}

export const store = createStore(reducer,applyMiddleware(...middleware))