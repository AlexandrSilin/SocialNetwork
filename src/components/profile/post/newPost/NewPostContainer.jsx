import React from "react";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    return <NewPost newPostText={props.store.getState().profileReducer.newPostText}
                    onChangeTextArea={(text) => props.store.dispatch(changeTextActionCreator(text))}
                    addPost={() => props.store.dispatch(addPostActionCreator())}/>
}

export default NewPostContainer