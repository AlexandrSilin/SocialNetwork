const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _callSubscriber() {
        console.log("state changed")
    },

    _state: {
        profile: {
            posts: [
                {message: "Post 1", likes: 11},
                {message: "Post 2", likes: 12},
                {message: "Post 3", likes: 25},
                {message: "Post 4", likes: 5}
            ],
            newPostText: ''
        },

        dialogs: {
            dialogsData: [
                {id: 1, name: "Dasha"},
                {id: 2, name: "Ilya"},
                {id: 3, name: "Marina"},
            ],

            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "how are you?"}
            ],
            newMessageText: ''
        },

        siteBar: {
            friends: [
                {name: "Dasha", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
                {name: "Ilya", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
                {name: "Marina", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"}
            ]
        }
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        if (this._state.profile.newPostText.length > 0)
            this._state.profile.posts.push({message: this._state.profile.newPostText, likes: 0});
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateTextField(message) {
        this._state.profile.newPostText = message;
        this._callSubscriber(this._state);
    },

    _updateMessageField(message) {
        this._state.dialogs.newMessageText = message;
        this._callSubscriber(this._state);
    },

    _sendMessage() {
        if (this._state.dialogs.newMessageText.length > 0)
            this._state.dialogs.messagesData.push({
                id: this._state.dialogs.messagesData.length,
                message: this._state.dialogs.newMessageText
            });
        this._state.dialogs.newMessageText = '';
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                this._addPost();
                break;
            }
            case CHANGE_POST_TEXT: {
                this._updateTextField(action.value);
                break;
            }
            case CHANGE_MESSAGE_TEXT: {
                this._updateMessageField(action.value);
                break;
            }
            case SEND_MESSAGE: {
                this._sendMessage();
                break;
            }
        }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const changeTextActionCreator = (message) => {
    return {type: CHANGE_POST_TEXT, value: message}
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const changeMessageBodyActionCreator = (message) => {
    return {type: CHANGE_MESSAGE_TEXT, value: message}
}

window.store = store;

export default store