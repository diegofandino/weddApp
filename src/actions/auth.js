import { types } from "../types/types";


export const checkAuth = () => ({
    type: types.authChecking
})

export const login = (user) => ({
    type: types.authLogin,
    payload: user
})