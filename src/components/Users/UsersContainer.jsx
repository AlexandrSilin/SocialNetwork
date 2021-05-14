import React from "react";
import {
    followActionCreator,
    followThunkCreator,
    getUsersThunkCreator,
    setCountUsersActionCreator,
    setCurrentPageActionCreator,
    setIsFollowingActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    unFollowThunkCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Loader} from "../loader/Loader";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    getPages = () => {
        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.countUsers / this.props.pageSize); i++)
            pages.push(i);
        return pages;
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> :
                <Users currentPage={this.props.currentPage} countUsers={this.props.countUsers}
                       pageSize={this.props.pageSize} users={this.props.users} unfollow={this.props.unfollow}
                       follow={this.props.follow} setCurrentPage={this.props.setCurrentPage}
                       getPages={() => this.getPages()}
                       getUsers={(page, pageSize) => this.props.getUsersThunkCreator(page, pageSize)}
                       followUser={(userId) => this.props.followThunkCreator(userId)}
                       unFollowUser={(userId) => this.props.unFollowThunkCreator(userId)}
                       toggleIsFollowing={this.props.toggleIsFollowing}
                       isFollowing={this.props.isFollowing}/>}
        </>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setCountUsers: (count) => dispatch(setCountUsersActionCreator(count)),
        toggleIsFollowing: (isFollowing, id) => dispatch(setIsFollowingActionCreator(isFollowing, id)),
        getUsersThunkCreator: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
        followThunkCreator: (userId) => dispatch(followThunkCreator(userId)),
        unFollowThunkCreator: (userId) => dispatch(unFollowThunkCreator(userId))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);