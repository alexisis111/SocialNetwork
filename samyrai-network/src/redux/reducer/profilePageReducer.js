const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'UPDATE-POST-TEXT'

const ProfilePageReducer = (state, action) => {
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
