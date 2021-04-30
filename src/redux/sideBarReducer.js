const initialState = {
    friends: [
        {id: 1, name: "Dasha", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
        {id: 2, name: "Ilya", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"},
        {id: 3, name: "Marina", ava: "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg"}
    ]
}

export const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer