import { BOOK_HOTEL,SEARCH_HOTEL } from "./actionType";

export const bookHotel=(payload)=>{
    return {
        type:BOOK_HOTEL,
        payload
    }
}

export const searchHotel=(payload)=>{
    return{
        type:SEARCH_HOTEL,
        payload
    }
}