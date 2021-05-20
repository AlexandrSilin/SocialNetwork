import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCountUsers = (state) => {
    return state.usersPage.countUsers;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const isFetching = (state) => {
    return state.usersPage.isFetching;
}

export const isFollowing = (state) => {
    return state.usersPage.isFollowing;
}