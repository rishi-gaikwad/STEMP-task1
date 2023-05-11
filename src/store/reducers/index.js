import TodoReducer from "./Todoreducers";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    TodoReducer,
});

export default rootReducer;