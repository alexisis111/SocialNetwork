import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducer/profilePageReducer";
import StoreContext from '../../../storeContext';
import Posts from './posts';




const PostsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                   
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        let action = onPostChangeActionCreator(text)
                        store.dispatch(action)
                    }
                    return <Posts
                        updatePostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}

export default PostsContainer;
