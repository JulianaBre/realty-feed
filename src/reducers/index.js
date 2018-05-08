import { combineReducers } from 'redux';
import { getBatmanListings } from "./getBatmanListings";
import { getSupermanListings } from "./getSupermanListings";
import { getSortedListings } from "./getSortedListings";

export const rootReducer = combineReducers({
    getBatmanListings,
    getSupermanListings,
    getSortedListings
})