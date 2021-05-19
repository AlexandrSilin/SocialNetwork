import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "redux-form"
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let store = createStore(combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: reducer
}), applyMiddleware(thunkMiddleware));

export default store;