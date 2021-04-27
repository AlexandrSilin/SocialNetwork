const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const initialState = {
    posts: [
        {message: "Post 1", likes: 11},
        {message: "Post 2", likes: 12},
        {message: "Post 3", likes: 25},
        {message: "Post 4", likes: 5}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText.length > 0)
                state.posts.push({
                    message: state.newPostText,
                    likes: 0
                });
            state.newPostText = '';
            return state;
        }
        case CHANGE_POST_TEXT: {
            state.newPostText = action.value;
            return state;
        }
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