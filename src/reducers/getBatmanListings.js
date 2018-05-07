import {
    GET_BATMAN_SUCCESS
 } from '../actions/getListings';

export const getBatmanListings = (state = {}, action) => {
    const batmanResponse = {};
    const supermanResponse = {};

    switch (action.type) {
        case GET_BATMAN_SUCCESS:
        batmanResponse.type = action.type;
        batmanResponse.json = action.response;
            return Object.assign({}, state, batmanResponse);     
        default:
            return state;      
    } 
}