import React from 'react';
import Post from './post/post';
import c from './posts.module.css';

let PostsData = [
    { message: 'hey hey hey', likesCount: 6 },
    { message: 'hello', likesCount: 44 },
    { message: 'how are you', likesCount: 0 }
]

let PostElements = PostsData.map((p, id) => <Post key={id} message={p.message} likesCount={p.likesCount} />);

const Posts = () => {
    return (
        <div className={c.posts}>
            <h1>Posts</h1>
            <div>
                <textarea name="" id="" ></textarea>
            </div>
            <div>
                <button>add post</button><button>remove post</button>
            </div>
            {PostElements}

        </div>
    );
}

export default Posts;
