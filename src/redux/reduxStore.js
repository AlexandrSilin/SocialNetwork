import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let store = createStore(combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
}));

export default store;