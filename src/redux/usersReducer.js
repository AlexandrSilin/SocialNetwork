const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 5,
    countUsers: 20,
    currentPage: 1,
    isFetching: true
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

export default usersReducer;