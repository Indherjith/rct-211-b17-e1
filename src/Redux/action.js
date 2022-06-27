//Create ActionCreator functions here
import {
    GET_SHOES_REQUEST,
    GET_SHOES_SUCCESS,
    GET_SHOES_FAILURE,
    UPDATE_SHOE_COUNT_REQUEST,
    UPDATE_SHOE_COUNT_SUCCESS,
    UPDATE_SHOE_COUNT_FAILURE
} from "./actionTypes";

const getShoesRequest = (payload)=>({type:GET_SHOES_REQUEST,payload});
const getShoesSuccess = (payload)=>({type:GET_SHOES_SUCCESS,payload});
const getShoesFailure = (payload)=>({type:GET_SHOES_FAILURE,payload});

const updateShoeCountRequest = (payload)=>({type:UPDATE_SHOE_COUNT_REQUEST,payload});
const updateShoeCountSuccess = (payload)=>({type:UPDATE_SHOE_COUNT_SUCCESS,payload});
const updateShoeCountFailure = (payload)=>({type:UPDATE_SHOE_COUNT_FAILURE,payload});

export {
    getShoesRequest,
    getShoesSuccess,
    getShoesFailure,
    updateShoeCountRequest,
    updateShoeCountSuccess,
    updateShoeCountFailure
}