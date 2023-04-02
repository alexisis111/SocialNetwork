import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e44a5d80-7421-4fb4-9385-fc60f3b7f104'
    }
})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {
        })
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`, {
        })
    },
    getProfile(params) {
        return instance.get(`profile/${params}`, {
        })
    }
}


export const getIsAuth = () => {
    return instance.get('auth/me', {
    }).then(response => {
        return response.data
    })
}
