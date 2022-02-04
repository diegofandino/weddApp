import {  combineReducers  } from "redux";
import { authReducer } from "./authReducer";
// import { authReducer } from "./authReducer";
// import { calendarReducer } from "./calendarReducer";
// import { uiReducer } from "./uiReducer";
export const reducers = combineReducers({
    auth: authReducer
});