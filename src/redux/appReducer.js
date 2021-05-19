import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedActionCreator = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => dispatch(setInitializedActionCreator()));
}

export default appReducer;
