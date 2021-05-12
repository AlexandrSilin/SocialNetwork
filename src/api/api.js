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
    isAuth() {
        return instance.get(`auth/me`)
    }
}

export const postsAPI = {
    getPosts(userId) {
        return instance.get(`profile/${userId ? userId : 2}`)
    }
}