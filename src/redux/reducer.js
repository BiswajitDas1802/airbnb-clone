import {BOOK_HOTEL, SEARCH_HOTEL} from "./actionType"

const init = {isAuth:false,hotel:{},searchRes:""}

export const reducer=(state= init , {type,payload})=>{
    switch (type){
        case BOOK_HOTEL:
            return{
                ...state,hotel: payload
            }
        case SEARCH_HOTEL:
            return{
                ...state,searchRes:payload
            }
            
        default:
        return state;
    }
}