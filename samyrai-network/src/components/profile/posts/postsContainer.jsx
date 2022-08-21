import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducer/profilePageReducer";
import Posts from './posts';




const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action)
    }


    return (

        <Posts
            updatePostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default PostsContainer;
