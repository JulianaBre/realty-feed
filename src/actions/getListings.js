import axios from 'axios';

export const GET_BATMAN_SUCCESS = "GET_BATMAN_SUCCESS";
export const GET_SUPERMAN_SUCCESS = "GET_SUPERMAN_SUCCESS";

export const getBatmanSuccess = (response) => ({
    type: GET_BATMAN_SUCCESS,
    response
});

export const getSupermanSuccess = (response) => ({
    type: GET_SUPERMAN_SUCCESS,
    response
});

// export const fetchListings = (hero) => {
//     return dispatch => {
//         if (hero === "batman") {
//             return axios.get("/data/batmanRealty.json")
//             .then(response => {
//                 return response.json()
//                 .then(responseJson => dispatch(getBatmanSuccess(responseJson)))
//             })   
//         } else if ("superman") {
//             return axios.get("/data/supermanRealty.json")
//             .then(response => {
//                 return response.json()
//                 .then(responseJson => dispatch(getSupermanSuccess(responseJson)))
//             })                      
//         }
//     }
// }