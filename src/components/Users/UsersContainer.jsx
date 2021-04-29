import React from "react";
import Users from "./Users";
import {
    followActionCreator, setCountUsersActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setCountUsers: (count) => dispatch(setCountUsersActionCreator(count))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);