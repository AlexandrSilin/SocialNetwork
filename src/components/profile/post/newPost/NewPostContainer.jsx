import React from "react";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.profilePage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTextArea: (text) => dispatch(changeTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer