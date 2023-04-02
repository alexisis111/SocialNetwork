import { UsersAPI } from '../../API/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING'
const BTN_DIS_FOLLOWED = 'BTN_DIS_FOLLOWED'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}


const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id  === action.userId) {
                        return { ...u, followed: true,  }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_ISFETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case BTN_DIS_FOLLOWED: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state;

    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, count: totalUsersCount })
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching })
export const setFollowingProgress = (followingInProgress, userId) => ({ type: BTN_DIS_FOLLOWED, followingInProgress, userId })

export const
    getUsers = (currentPage, pageSize) => {
        return (dispatch) => {
            dispatch(setToggleIsFetching(true))
            UsersAPI.getUsers(currentPage, pageSize)
                .then(data => {
                    dispatch(setToggleIsFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                })
        }
    }
export const
    follow = (userId) => {
        return (dispatch) => {
            dispatch(setFollowingProgress(true, userId))
            UsersAPI.follow(userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(followSuccess(userId))
                    }
                    dispatch(setFollowingProgress(false, userId))
                })
        }
    }
export const
    unFollow = (userId) => {
        return (dispatch) => {
            dispatch(setFollowingProgress(true, userId))
            UsersAPI.unFollow(userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(unFollowSuccess(userId))
                    }
                    dispatch(setFollowingProgress(false, userId))
                })
        }
    }


export default UsersReducer;
