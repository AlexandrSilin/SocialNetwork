import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

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

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.siteBar = sideBarReducer(this._state.siteBar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store