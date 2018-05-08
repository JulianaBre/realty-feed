import axios from 'axios';

export const GET_BATMAN_SUCCESS = "GET_BATMAN_SUCCESS";
export const GET_SUPERMAN_SUCCESS = "GET_SUPERMAN_SUCCESS";
export const PRICE_SORT = "PRICE_SORT";
export const BED_SORT = "BED_SORT";
export const SQ_FT_SORT = "SQ_FT_SORT";


export const getBatmanSuccess = (response) => ({
    type: GET_BATMAN_SUCCESS,
    response
});

export const getSupermanSuccess = (response) => ({
    type: GET_SUPERMAN_SUCCESS,
    response
});

export const sortBy = (type, batmanListing, supermanListing) => ({
    type,
    batmanListing,
    supermanListing
});