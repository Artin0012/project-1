import { root } from "./Root";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
export const store = createStore(root, applyMiddleware(logger))