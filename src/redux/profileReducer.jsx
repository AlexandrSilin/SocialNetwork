const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const profileReducer = (state, action) => {
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

export default profileReducer