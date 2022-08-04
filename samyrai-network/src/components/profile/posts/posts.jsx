import React from 'react';
import Post from './post/post';
import c from './posts.module.css';




const Posts = (props) => {
 
    let PostElements = props.posts.map((p, id) => <Post key={id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePostText(text);
    }


    return (

        <div className={c.posts}>
            <h1>Posts</h1>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {PostElements}

        </div>
    );
}

export default Posts;
