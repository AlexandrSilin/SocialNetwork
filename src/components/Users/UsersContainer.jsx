import React from "react";
import {
    followActionCreator,
    setCountUsersActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from 'axios';
import {Loader} from "../loader/Loader";


class UsersContainer extends React.Component {

    getUsers = (page) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage);
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
                       getPages={() => this.getPages()} getUsers={(page) => this.getUsers(page)}/>}
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
        toggleIsFetching: (isFetching) => dispatch(setIsFetchingActionCreator(isFetching))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);