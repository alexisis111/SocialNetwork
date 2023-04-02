import { UsersAPI } from "../../API/api"

const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'UPDATE-POST-TEXT'
const SET_POSTS = 'SET-POSTS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {

    profileImg: [
        { url: 'https://sun9-west.userapi.com/sun9-8/s/v1/ig2/fvg1qRJlxX9y7AkO3d6ltEluiV4EK9gtS1Qoia2oqhEPog_lC95lsTw4vaqD_TYt2mkT63rLZBeN1wDvcCI3L-XY.jpg?size=200x200&quality=96&crop=2,2,534,534&ava=1' }
    ],
    posts: [],
    newPostText: '',
    profile: null
}


const ProfilePageReducer = (state = initialState, action) => {
    

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            }
        }
        case ON_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: ON_POST_CHANGE, newText: text })
export const setPostActionCreator = (posts) => ({ type: SET_POSTS, posts })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}

export default ProfilePageReducer;
