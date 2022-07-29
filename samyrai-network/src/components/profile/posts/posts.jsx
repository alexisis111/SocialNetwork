import React from 'react';
import Post from './post/post';
import c from './posts.module.css';
const Posts = () => {
    return (
        <div className={c.posts}>
            <h1>Posts</h1>
            <div>
                <textarea name="" id="" ></textarea>
            </div>
            <div><button>add post</button><button>remove post</button></div>
            <Post message='hey hey hey' likesCount=' 6' />
            <Post message='hello' likesCount=' 77' />
            <Post message='how are you' likesCount=' 1' />
        </div>
    );
}

export default Posts;
