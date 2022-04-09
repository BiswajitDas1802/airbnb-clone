import {BOOK_HOTEL, SEARCH_HOTEL,GOOGLE_SIGNIN_START,GOOGLE_SIGNIN_SUCCSESS,GOOGLE_SIGNIN_FAIL, GOOGLE_LOGOUT, PHONE_SIGNUP, SEARCH,GUEST} from "./actionType"

// const dat = new Date.join(" ")

const init = {isAuth:false,
    hotel:{},
    searchRes:"",
    currUser:null,
    error:null,
    search:{start:"22-04-09",end:"22-04-10"},
    guest:0
}

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

        case GOOGLE_SIGNIN_SUCCSESS:
            return{
                ...state,currUser: payload
            }
        case GOOGLE_SIGNIN_FAIL:
            return {
                ...state,error: payload
            }
        case GOOGLE_LOGOUT:
            return {
                ...state,currUser:null
            }
        case SEARCH:
            return{
               ...state,search: payload 
            }

        case GUEST:
            return{
                ...state,GUEST: payload
            }
            
        default:
        return state;
    }
}