import { BOOK_HOTEL,GOOGLE_LOGOUT,PHONE_SIGNUP,SEARCH_HOTEL,GOOGLE_SIGNIN_START, GOOGLE_SIGNIN_SUCCSESS, GOOGLE_SIGNIN_FAIL, SEARCH, GUEST } from "./actionType";
import { googleAuthProvider, signout } from '../firebase.js';
import { auth,signInWithPop } from '../firebase.js';

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

export const googleSigninStart=()=>{
    return{
        type:GOOGLE_SIGNIN_START,
    }
}

export const googleSigninSuccess=(payload)=>{
    return{
        type:GOOGLE_SIGNIN_SUCCSESS,
        payload
    }
}

export const googleSigninFail=(payload)=>{
    return{
        type:GOOGLE_SIGNIN_FAIL,
        payload
    }
}

export const googleLogOut=()=>{
    return{
        type:GOOGLE_LOGOUT
    }
}

export const signUpWithPhone=()=>{
    return{
        type:PHONE_SIGNUP
    }
}

export const search=(payload)=>{
    return {
        type:SEARCH,
        payload
    }
}

export const guestbb = (payload)=>{
    return {
        type:GUEST,
        payload
    }
}




export const googleSignin=()=>{
    return function(dispatch){
        dispatch(googleSigninStart())
        signInWithPop(auth,googleAuthProvider)
        .then((user)=>{
            dispatch(googleSigninSuccess(user))
        })
        .then((error)=>{dispatch(googleSigninFail(error))})
    }
}

export const googleSignOut=()=>{
    return function(dispatch){
        // dispatch(googleLogOut())
        signout(auth)
        .then((user)=>{
            dispatch(googleLogOut())
            
        })
        .then(()=>alert("LogOut Successful"))
        .catch((error)=>{dispatch(googleSigninFail(error))})
        
    }
}

export const phoneSignUp=()=>{
    return function(dispatch){

    }
}