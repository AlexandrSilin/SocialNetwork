let state = {
    profile: {
        posts: [
            {message: "Post 1", likes: 11},
            {message: "Post 2", likes: 12},
            {message: "Post 3", likes: 25},
            {message: "Post 4", likes: 5}
        ],
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
}

export let addPost = (postMessage) => {
    if (postMessage.length > 0)
        state.profile.posts.push({message: postMessage, likes: 0})
}

export default state