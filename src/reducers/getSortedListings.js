import {
    PRICE_SORT,
    BED_SORT,
    SQ_FT_SORT
 } from '../actions/getListings';

export const getSortedListings = (state = {}, action) => {
    const sortResponse = {};
    let masterList;
    if (action.batmanListing && action.supermanListing) {
        masterList = action.batmanListing.concat(action.supermanListing);
    }
    switch (action.type) {
        case PRICE_SORT:
            sortResponse.list = masterList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            return Object.assign({}, state, sortResponse);
        case BED_SORT:
            sortResponse.list = masterList.sort((a, b) => parseFloat(a.beds) - parseFloat(b.beds));
            return Object.assign({}, state, sortResponse);
        case SQ_FT_SORT:
            sortResponse.list = masterList.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
            return Object.assign({}, state, sortResponse);
         default:
            return state;      
    }
}