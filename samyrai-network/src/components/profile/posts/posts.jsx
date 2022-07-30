import React from 'react';
import Post from './post/post';
import c from './posts.module.css';





const Posts = (props) => {

    let PostElements = props.PostsData.map((p, id) => <Post key={id} message={p.message} likesCount={p.likesCount} />);

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
