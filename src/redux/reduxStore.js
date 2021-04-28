import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let store = createStore(combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
}));

export default store;