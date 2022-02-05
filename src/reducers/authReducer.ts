import { types } from "../types/types"

const initialState = {
    isLoggedIn: false,
    uid: "",
    user: {}
}

export const authReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case types.authChecking:
            return {...state, isLoggedIn: false};            
        case types.authLogin:
            return {...state, isLoggedIn: true, user: action.payload};            
        default:
            return state;
    }

}