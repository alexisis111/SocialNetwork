import React from 'react';
import Post from './post/post';
import c from './posts.module.css';
import axios from "axios";





const Posts = (props) => {
    if (props.posts.length === 0) {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => {
                props.setPosts(response.data)
            });
    }
    let postData = props.posts.map((post) =>
        <div key={post.id} className={c.title}>
            {post.id}
            <div className={c.body}>
                <img src={post.thumbnailUrl} alt="" />
            </div>
            {post.title}
        </div>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updatePostText(text);
    }


    return (

        <div className={c.posts}>
            <h1>Posts</h1>
            <div>
                <textarea placeholder="Ваше сообщение"
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <Post posts={props.posts} />
            {postData}
        </div>
    );
}

export default Posts;
