const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: "Post 1", likes: 11},
        {id: 2, message: "Post 2", likes: 12},
        {id: 3, message: "Post 3", likes: 25},
        {id: 4, message: "Post 4", likes: 5}
    ],
    newPostText: ''
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

export default profileReducer