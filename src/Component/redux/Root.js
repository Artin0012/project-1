import { reducer, WishListReducer } from "./Reducer";
import { combineReducers } from 'redux'

export const root = combineReducers({
    reducerAri: reducer,
    reducerZar: WishListReducer
})