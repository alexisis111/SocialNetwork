import {
    addPostActionCreator,
    onPostChangeActionCreator,
    setPostActionCreator
} from "../../../redux/reducer/profilePageReducer";
import Posts from './posts';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = onPostChangeActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        setPosts: (posts) => {
            dispatch(setPostActionCreator(posts))
        }
    }
}


const PostsContainer = connect( mapStateToProps,mapDispatchToProps)(Posts)

export default PostsContainer;
