import { combineReducers } from 'redux'
import { getBatmanListings } from './getBatmanListings'
import { getSupermanListings } from './getSupermanListings'

export const rootReducer = combineReducers({
    getBatmanListings,
    getSupermanListings
})