import {
    GET_SUPERMAN_SUCCESS
 } from "../actions/getListings";

export const getSupermanListings = (state = {}, action) => {
    const supermanResponse = {};

    switch (action.type) {
        case GET_SUPERMAN_SUCCESS:
        supermanResponse.type = action.type;
        supermanResponse.json = action.response;
            return Object.assign({}, state, supermanResponse);
        
        default:
            return state;      
    } 
}