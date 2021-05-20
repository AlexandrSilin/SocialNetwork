import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "d06944c1-ef2b-4a90-87ee-f1365e13b7ee"}
})

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getPosts(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}
