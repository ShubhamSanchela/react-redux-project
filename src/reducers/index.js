import { combineReducers } from "redux"
import userReducer from "./PostReducer"

export default combineReducers({
    user : userReducer
});