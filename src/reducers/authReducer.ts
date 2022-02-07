import { types } from "../types/types"

const initialState = {
    isLoggedIn: false,
    user: {}
}

export const authReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case types.authChecking:
            return action.payload ? {...state, user: action.payload, isLoggedIn: true} : {...state, user: action.payload, isLoggedIn: false}            
        case types.authLogin:
            return {...state, isLoggedIn: true, user: action.payload};            
        case types.authLogout:
            return {...state, isLoggedIn: false, user: {}};            
        default:
            return state;
    }

}