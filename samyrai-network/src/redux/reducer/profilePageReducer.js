const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'UPDATE-POST-TEXT'

let initialState = {

    profileImg: [
        { url: 'https://sun9-west.userapi.com/sun9-8/s/v1/ig2/fvg1qRJlxX9y7AkO3d6ltEluiV4EK9gtS1Qoia2oqhEPog_lC95lsTw4vaqD_TYt2mkT63rLZBeN1wDvcCI3L-XY.jpg?size=200x200&quality=96&crop=2,2,534,534&ava=1' }
    ],
    posts: [
        { id: 1, message: 'hey hey hey', likesCount: 6 },
        { id: 2, message: 'hello', likesCount: 44 },
        { id: 3, message: 'how are you', likesCount: 0 }
    ],
    newPostText: ''
}


const ProfilePageReducer = ( state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case ON_POST_CHANGE:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const onPostChangeActionCreator = (text) => {
    return { type: ON_POST_CHANGE, newText: text }
}
export default ProfilePageReducer;
