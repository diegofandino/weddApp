import { types } from "../types/types";


export const checkingAuth = () => {
    return async(dispatch) => {
        let user = JSON.parse(localStorage.getItem('user'));
        dispatch(finishCheckAuth(user));
    }
}

export const finishCheckAuth = (user) => ({
    type: types.authChecking,
    payload: user
})

export const login = (user) => {
    return async(dispatch) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(finishLogin(user));
    }
}

export const finishLogin = (user) => ({
    type: types.authLogin,
    payload: user
})