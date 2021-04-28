import React from "react";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTextArea: (text) => dispatch(changeTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);