import {usersAPI} from "../api/api"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

const initialState = {
    users: [],
    pageSize: 5,
    countUsers: 20,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsersActionCreator(response.data.items));
                dispatch(setCountUsersActionCreator(response.data.totalCount));
                dispatch(setIsFetchingActionCreator(false));
            })
    };
}

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingActionCreator(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollowActionCreator(userId);
                }
                dispatch(setIsFollowingActionCreator(false, userId))
            })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingActionCreator(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    followActionCreator(userId);
                }
                dispatch(setIsFollowingActionCreator(false, userId))
            })
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_COUNT_USERS:
            return {...state, countUsers: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetching ?
                    [...state.isFollowing, action.id] : [...state.isFollowing.filter(id => id !== action.id)]
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCountUsersActionCreator = (count) => ({type: SET_COUNT_USERS, count});
export const setIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setIsFollowingActionCreator = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING, isFetching, id})

export default usersReducer;