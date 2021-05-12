import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.isAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserDataActionCreator(id, email, login));
            }
        });
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer;