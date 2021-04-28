const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            ava: '',
            followed: false,
            fullName: 'Alexandr',
            status: 'status1',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 2,
            ava: '',
            followed: true,
            fullName: 'Daria',
            status: 'status2',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            ava: '',
            followed: false,
            fullName: 'Ilya',
            status: 'status3',
            location: {country: 'Russia', city: 'SPB'}
        }
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;