import { act } from "react-dom/test-utils";
import { types } from "../types/types"

const initialState = {
    isLoggedIn: false,
}

export const authReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case types.authChecking:
            return {...state, isLoggedIn: false};            
        default:
            return state;
    }

}