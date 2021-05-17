import React from "react";
import {addPostActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPostActionCreator(post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(NewPost);