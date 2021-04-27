const initialState = {
    friends: [
        {name: "Dasha", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
        {name: "Ilya", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
        {name: "Marina", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"}
    ]
}

export const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer