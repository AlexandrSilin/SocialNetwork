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
                {message: "Hello"},
                {message: "how are you?"}
            ]
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
        if (action.type === 'ADD-POST') {
            if (this._state.profile.newPostText.length > 0)
                this._state.profile.posts.push({message: this._state.profile.newPostText, likes: 0})
            this._state.profile.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-TEXT') {
            this._state.profile.newPostText = action.value;
            this._callSubscriber(this._state)
        }
    }
}

window.store = store;

export default store