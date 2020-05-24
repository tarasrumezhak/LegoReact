import darkReducer from "./isdark";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isDarkMode: darkReducer
});

export default allReducers;