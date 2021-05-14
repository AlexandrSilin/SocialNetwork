import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

const initialState = {
    posts: [
        {id: 1, message: "Post 1", likes: 11},
        {id: 2, message: "Post 2", likes: 12},
        {id: 3, message: "Post 3", likes: 25},
        {id: 4, message: "Post 4", likes: 5}
    ],
    newPostText: '',
    status: '',
    profile: null
}

export const getPostThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getPosts(userId).then(response => {
            dispatch(setUserProfileActionCreator(response.data));
        });
    }
}

export const setStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusActionCreator(response.data))
        })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
                dispatch(updateUserStatusActionCreator(status))
        })
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return state.newPostText.length > 0 ? {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likes: 0
                }],
                newPostText: ''
            } : state;
        case CHANGE_POST_TEXT:
            return ({
                ...state,
                newPostText: action.value
            });
        case SET_USER_PROFILE:
            return ({
                ...state,
                profile: action.profile
            })
        case SET_USER_STATUS:
            return ({
                ...state,
                status: action.status
            })
        case UPDATE_USER_STATUS:
            return ({
             ...state,
             status: action.status
            })
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const changeTextActionCreator = (message) => {
    return {type: CHANGE_POST_TEXT, value: message}
}

const setUserProfileActionCreator = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

const setUserStatusActionCreator = (status) => {
    return {type: SET_USER_STATUS, status}
}

const updateUserStatusActionCreator = (status) => {
    return {type: UPDATE_USER_STATUS, status}
}

export default profileReducer