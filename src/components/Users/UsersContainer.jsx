import React from "react";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/usersReducer";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);