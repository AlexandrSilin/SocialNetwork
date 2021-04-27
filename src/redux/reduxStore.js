import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";

let store = createStore(combineReducers({profileReducer, dialogsReducer, sideBarReducer}));

export default store;